"""Record API tests."""


def test_list_records(api):
    """GET /record/list"""
    resp = api.get_data("/record/list", params={"user": api.uid or 1, "page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
