"""Chat API tests."""


def test_list_chat_contacts(api):
    """GET /chat"""
    resp = api.get_data("/chat")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_chat_records(api):
    """GET /api/chat/record"""
    resp = api.get_raw("/api/chat/record", params={"user": api.uid or 1, "page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
