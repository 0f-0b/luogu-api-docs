"""Activity/Feed API tests."""


def test_get_feed_list(api):
    """GET /api/feed/list"""
    uid = api.uid or 1
    resp = api.get_raw("/api/feed/list", params={"user": uid, "page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_feed_watching(api):
    """GET /api/feed/watching"""
    resp = api.get_raw("/api/feed/watching", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
