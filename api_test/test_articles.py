"""Article API tests."""


def test_list_articles(api):
    """GET /article"""
    resp = api.get_lentille("/article", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_find_articles(api):
    """GET /api/article/find - REMOVED: returns 404."""
    uid = api.uid or 1
    resp = api.get_raw("/api/article/find", params={"user": uid, "page": 1})
    assert resp.status_code == 404, f"Expected 404, got: {resp.status_code}"
    print(f"  CONFIRMED REMOVED: Status {resp.status_code}")


def test_get_mine_articles(api):
    """GET /article/mine"""
    resp = api.get_lentille("/article/mine", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_favored_articles(api):
    """GET /article/favored - REMOVED: returns 404."""
    resp = api.get_raw("/article/favored", params={"page": 1})
    assert resp.status_code == 404, f"Expected 404, got: {resp.status_code}"
    print(f"  CONFIRMED REMOVED: Status {resp.status_code}")
