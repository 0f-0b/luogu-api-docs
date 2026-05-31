"""Problem Set (Training) API tests."""


def test_list_problem_sets(api):
    """GET /training/list - Changed from DataResponse to LentilleDataResponse."""
    resp = api.get_lentille("/training/list")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_problem_set(api):
    """GET /training/:id - Changed from DataResponse to LentilleDataResponse."""
    resp = api.get_lentille("/training/1")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_created_trainings(api):
    """GET /api/user/createdTrainings"""
    resp = api.get_raw("/api/user/createdTrainings", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_marked_trainings(api):
    """GET /api/user/markedTrainings"""
    resp = api.get_raw("/api/user/markedTrainings", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
