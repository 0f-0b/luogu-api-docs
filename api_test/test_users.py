"""User API tests."""


def test_get_user(api):
    """GET /user/:uid"""
    uid = api.uid or 1
    resp = api.get_lentille(f"/user/{uid}")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_search_user(api):
    """GET /api/user/search"""
    resp = api.get_raw("/api/user/search", params={"keyword": "1"})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_user_practice(api):
    """GET /user/:uid/practice"""
    uid = api.uid or 1
    resp = api.get_lentille(f"/user/{uid}/practice")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_elo_rating(api):
    """GET /api/rating/elo - REMOVED: returns 404."""
    uid = api.uid or 1
    resp = api.get_raw("/api/rating/elo", params={"user": uid})
    assert resp.status_code == 404, f"Expected 404, got: {resp.status_code}"
    print(f"  CONFIRMED REMOVED: Status {resp.status_code}")


def test_get_followings(api):
    """GET /api/user/followings"""
    uid = api.uid or 1
    resp = api.get_raw("/api/user/followings", params={"user": uid})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_followers(api):
    """GET /api/user/followers"""
    uid = api.uid or 1
    resp = api.get_raw("/api/user/followers", params={"user": uid})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_blacklist(api):
    """GET /api/user/blacklist"""
    uid = api.uid or 1
    resp = api.get_raw("/api/user/blacklist", params={"user": uid})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_user_setting(api):
    """GET /user/setting"""
    resp = api.get_lentille("/user/setting")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_user_preference(api):
    """GET /user/setting/preference"""
    resp = api.get_lentille("/user/setting/preference")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_user_prize(api):
    """GET /user/setting/prize"""
    resp = api.get_lentille("/user/setting/prize")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_user_security(api):
    """GET /user/setting/security"""
    resp = api.get_lentille("/user/setting/security")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
