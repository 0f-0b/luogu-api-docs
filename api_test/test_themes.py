"""Theme API tests."""


def test_list_themes(api):
    """GET /theme/list"""
    resp = api.get_data("/theme/list")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
