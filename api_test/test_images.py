"""Image API tests."""


def test_list_images(api):
    """GET /image"""
    uid = api.uid or 1
    resp = api.get_data("/image", params={"user": uid, "content": ""})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
