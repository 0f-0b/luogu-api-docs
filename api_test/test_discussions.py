"""Discussion API tests."""


def test_list_posts(api):
    """GET /discuss"""
    resp = api.get_lentille("/discuss", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_created_posts(api):
    """GET /api/user/createdPosts"""
    resp = api.get_raw("/api/user/createdPosts", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
