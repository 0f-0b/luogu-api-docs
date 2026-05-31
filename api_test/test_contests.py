"""Contest API tests."""


def test_list_contests(api):
    """GET /contest/list"""
    resp = api.get_lentille("/contest/list")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_joined_contests(api):
    """GET /api/user/joinedContests"""
    resp = api.get_raw("/api/user/joinedContests", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_created_contests(api):
    """GET /api/user/createdContests"""
    resp = api.get_raw("/api/user/createdContests", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_contest(api):
    """GET /contest/:id - try a well-known contest."""
    resp = api.get_lentille("/contest/1")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
