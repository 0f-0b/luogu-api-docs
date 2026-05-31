"""Auth API tests (read-only)."""


def test_get_captcha(api):
    """GET /lg4/captcha - should return a JPEG image."""
    resp = api.session.get("/lg4/captcha")
    assert resp.status_code == 200, f"Status: {resp.status_code}"
    assert "image" in resp.headers.get("content-type", ""), f"Unexpected content-type: {resp.headers.get('content-type')}"
    print(f"  Content-Type: {resp.headers.get('content-type')}, Size: {len(resp.content)} bytes")
