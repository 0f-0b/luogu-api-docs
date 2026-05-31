"""Paste API tests."""


def test_list_pastes(api):
    """GET /paste"""
    resp = api.get_data("/paste")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
