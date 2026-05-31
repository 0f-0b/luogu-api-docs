"""Problem API tests."""


def test_list_problems(api):
    """GET /problem/list - Changed from DataResponse to LentilleDataResponse."""
    resp = api.get_lentille("/problem/list", params={"type": "P", "keyword": "A+B"})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_problem(api):
    """GET /problem/P1001"""
    resp = api.get_lentille("/problem/P1001")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_problem_solution(api):
    """GET /problem/solution/P1001"""
    resp = api.get_lentille("/problem/solution/P1001")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_created_problems(api):
    """GET /api/user/createdProblems"""
    resp = api.get_raw("/api/user/createdProblems", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
