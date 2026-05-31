"""Comprehensive API probe: test all endpoints with every access method."""

import io
import json
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from client import LuoguClient, TEAM_ID_START

PASS = "\033[92mPASS\033[0m"
FAIL = "\033[91mFAIL\033[0m"
SKIP = "\033[93mSKIP\033[0m"
REMOVED = "\033[90mREMOVED\033[0m"
HTML = "\033[96mHTML\033[0m"


def probe(client: LuoguClient):
    uid = client.uid or 1
    tid = TEAM_ID_START
    results = {"pass": [], "fail": [], "removed": [], "html_only": []}

    def test(name: str, path: str, method: str = "auto", params: dict | None = None, expect_status: int = 200, binary: bool = False):
        """Test an endpoint with multiple strategies.

        method: 'auto' tries JSON API -> Lentille -> HTML extraction
                'json' tries only raw JSON API
                'lentille' tries only Lentille headers
                'html' tries only HTML extraction
        binary: if True, check for non-JSON binary content (e.g. images)
        """
        strategies = []
        if method == "auto":
            strategies = [
                ("JSON API (raw)", lambda: client.session.get(path, params=params)),
                ("DataResponse (_contentOnly)", lambda: client.get_data(path, params=params)),
                ("LentilleDataResponse", lambda: client.get_lentille(path, params=params)),
                ("HTML embedded data", lambda: client.get_html_data(path, params=params)),
            ]
        elif method == "json":
            strategies = [("JSON API (raw)", lambda: client.get_raw(path, params=params))]
        elif method == "lentille":
            strategies = [("LentilleDataResponse", lambda: client.get_lentille(path, params=params))]
        elif method == "html":
            strategies = [("HTML embedded data", lambda: client.get_html_data(path, params=params))]
        elif method == "binary":
            strategies = [("Binary", lambda: client.session.get(path, params=params))]

        for strategy_name, fn in strategies:
            try:
                resp = fn()
                if resp is None:
                    continue

                # HTML extraction returns dict directly
                if isinstance(resp, dict):
                    actual_status = resp.get("status", "?")
                    if actual_status == expect_status:
                        tag = HTML
                        results["html_only"].append(name)
                        data_keys = list(resp.get("data", {}).keys()) if isinstance(resp.get("data"), dict) else []
                        print(f"  {tag} {name} [{strategy_name}] status={actual_status} data_keys={data_keys[:5]}")
                        return True
                    continue

                actual_status = resp.status_code

                # Handle binary responses (images, etc.)
                if binary and actual_status == expect_status:
                    ct = resp.headers.get("content-type", "")
                    size = len(resp.content)
                    if size > 0:
                        tag = PASS
                        results["pass"].append(name)
                        print(f"  {tag} {name} [{strategy_name}] status={actual_status} type={ct} size={size}")
                        return True

                # Check content type
                ct = resp.headers.get("content-type", "")
                is_json = "json" in ct
                is_html = "html" in ct

                if actual_status == expect_status and is_json:
                    tag = PASS
                    results["pass"].append(name)
                    try:
                        d = resp.json()
                        data_keys = list(d.get("data", {}).keys()) if isinstance(d.get("data"), dict) else list(d.keys())[:5]
                    except Exception:
                        data_keys = ["(parse error)"]
                    print(f"  {tag} {name} [{strategy_name}] status={actual_status} data_keys={data_keys[:5]}")
                    return True

                if actual_status == expect_status and not is_json and strategy_name == "HTML embedded data":
                    # The HTML strategy returns dict, handled above
                    pass

            except Exception as e:
                pass

        # All strategies failed - check if 404
        last_resp = None
        for strategy_name, fn in strategies:
            try:
                r = fn()
                if r is not None and not isinstance(r, dict):
                    last_resp = r
                    break
            except Exception:
                pass

        if last_resp is not None:
            if last_resp.status_code == 404:
                tag = REMOVED
                results["removed"].append(name)
                print(f"  {tag} {name} status=404 (removed)")
            else:
                tag = FAIL
                results["fail"].append(name)
                try:
                    body = last_resp.text[:150] if last_resp.content else "(empty)"
                except UnicodeDecodeError:
                    body = f"(binary, {len(last_resp.content)} bytes)"
                print(f"  {tag} {name} status={last_resp.status_code} body={body}")
        else:
            tag = FAIL
            results["fail"].append(name)
            print(f"  {tag} {name} (all strategies failed)")

        return False

    # ==================== MISC ====================
    print("\n=== 杂项 (Misc) ===")
    # CSRF token is extracted from HTML meta tag
    csrf = client.get_csrf_token()
    if csrf:
        print(f"  {PASS} CSRF 令牌 [HTML meta] token={csrf[:20]}...")
        results["pass"].append("CSRF 令牌")
    else:
        print(f"  {FAIL} CSRF 令牌")
        results["fail"].append("CSRF 令牌")
    test("配置", "/_lfe/config", method="json")
    test("标签", "/_lfe/tags", method="json")
    test("咕值排名", "/ranking", params={"page": 1}, method="lentille")
    test("等级分排名", "/ranking/elo", params={"page": 1}, method="lentille")
    test("通知", "/user/notification", params={"page": 1})
    test("验证码", "/lg4/captcha", method="binary", binary=True)

    # ==================== PROBLEMS ====================
    print("\n=== 题目 (Problems) ===")
    test("列出题目", "/problem/list", params={"type": "P"})
    test("获取题目 P1001", "/problem/P1001", method="lentille")
    test("获取题解 P1001", "/problem/solution/P1001", method="lentille")
    test("列出创建的题目", "/api/user/createdProblems", params={"page": 1}, method="json")

    # ==================== PROBLEM SETS ====================
    print("\n=== 题单 (Problem Sets / Training) ===")
    test("列出题单", "/training/list")
    test("获取题单 100", "/training/100")
    test("列出创建的题单", "/api/user/createdTrainings", params={"page": 1}, method="json")
    test("列出收藏的题单", "/api/user/markedTrainings", params={"page": 1}, method="json")

    # ==================== CONTESTS ====================
    print("\n=== 比赛 (Contests) ===")
    test("列出比赛", "/contest/list", method="lentille")
    test("列出参加的比赛", "/api/user/joinedContests", params={"page": 1}, method="json")
    test("列出创建的比赛", "/api/user/createdContests", params={"page": 1}, method="json")
    test("获取比赛 1", "/contest/1", method="lentille")

    # ==================== RECORDS ====================
    print("\n=== 记录 (Records) ===")
    test("列出记录", "/record/list", params={"user": uid, "page": 1})

    # ==================== DISCUSSIONS ====================
    print("\n=== 讨论 (Discussions) ===")
    test("列出帖子", "/discuss", params={"page": 1}, method="lentille")
    test("列出发布的帖子", "/api/user/createdPosts", params={"page": 1}, method="json")

    # ==================== ACTIVITIES ====================
    print("\n=== 动态 (Activities) ===")
    test("用户动态", "/api/feed/list", params={"user": uid, "page": 1}, method="json")
    test("关注动态", "/api/feed/watching", params={"page": 1}, method="json")

    # ==================== USERS ====================
    print("\n=== 用户 (Users) ===")
    test(f"获取用户 {uid}", f"/user/{uid}", method="lentille")
    test("搜索用户", "/api/user/search", params={"keyword": "1"}, method="json")
    test(f"练习情况 {uid}", f"/user/{uid}/practice", method="lentille")
    test("历史等级分", "/api/rating/elo", params={"user": uid}, method="json")
    test("关注列表", "/api/user/followings", params={"user": uid}, method="json")
    test("粉丝列表", "/api/user/followers", params={"user": uid}, method="json")
    test("黑名单", "/api/user/blacklist", params={"user": uid}, method="json")
    test("账号设置", "/user/setting", method="lentille")
    test("偏好设置", "/user/setting/preference", method="lentille")
    test("奖项认证", "/user/setting/prize", method="lentille")
    test("安全设置", "/user/setting/security", method="lentille")

    # ==================== TEAMS ====================
    print(f"\n=== 团队 (Teams), tid={tid} ===")
    test(f"获取团队 {tid}", f"/team/{tid}", method="lentille")
    test("我的团队", "/user/mine/team", method="lentille")
    test(f"团队成员 {tid}", f"/team/{tid}/member", method="lentille")
    test(f"团队题目 {tid}", f"/team/{tid}/problem", method="lentille")
    test(f"团队题单 {tid}", f"/team/{tid}/training", method="lentille")
    test(f"团队比赛 {tid}", f"/team/{tid}/contest", method="lentille")

    # ==================== CHAT ====================
    print("\n=== 私信 (Chat) ===")
    test("最近联系", "/chat")
    test("私信记录", "/api/chat/record", params={"user": uid, "page": 1}, method="json")

    # ==================== ARTICLES ====================
    print("\n=== 专栏 (Articles) ===")
    test("列出文章", "/article", params={"page": 1}, method="lentille")
    test("列出用户文章", "/api/article/find", params={"user": uid, "page": 1}, method="json")
    test("我的文章", "/article/mine", params={"page": 1}, method="lentille")
    test("收藏的文章", "/article/favored", params={"page": 1})

    # ==================== IMAGES ====================
    print("\n=== 图片 (Images) ===")
    test("列出图片", "/image", params={"user": uid, "content": ""})

    # ==================== THEMES ====================
    print("\n=== 主题 (Themes) ===")
    test("列出主题", "/theme/list")

    # ==================== PASTES ====================
    print("\n=== 剪贴板 (Pastes) ===")
    test("列出剪贴板", "/paste")

    # ==================== BLOG ====================
    print("\n=== 博客 (Blog) ===")
    test("用户博客", "/api/blog/userBlogs", params={"user": uid, "page": 1}, method="json")
    test("可见博客", "/api/blog/lists", params={"user": uid, "page": 1})

    # ==================== SUMMARY ====================
    print("\n" + "=" * 60)
    print(f"  JSON API working:  {len(results['pass'])}")
    print(f"  HTML-only data:    {len(results['html_only'])}")
    print(f"  Removed (404):     {len(results['removed'])}")
    print(f"  Failed:            {len(results['fail'])}")

    if results["html_only"]:
        print(f"\n  HTML-only endpoints:")
        for n in results["html_only"]:
            print(f"    - {n}")

    if results["removed"]:
        print(f"\n  Removed endpoints:")
        for n in results["removed"]:
            print(f"    - {n}")

    if results["fail"]:
        print(f"\n  Failed endpoints:")
        for n in results["fail"]:
            print(f"    - {n}")

    return results


if __name__ == "__main__":
    client = LuoguClient()
    probe(client)
    client.session.close()
