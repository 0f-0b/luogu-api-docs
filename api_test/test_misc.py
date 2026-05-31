"""Misc API tests."""

import json
import re


def test_get_csrf_token(api):
    """GET / - extract CSRF token from homepage."""
    resp = api.session.get("/")
    assert resp.status_code == 200
    match = re.search(r'<meta\s+name="csrf-token"\s+content="([^"]+)"', resp.text)
    assert match, "CSRF token meta tag not found"
    token = match.group(1)
    assert len(token) > 0
    print(f"  CSRF token: {token[:20]}...")


def test_get_config(api):
    """GET /_lfe/config"""
    resp = api.get_raw("/_lfe/config")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:200]}"
    data = resp.json()
    assert isinstance(data, dict)
    print(f"  Keys: {list(data.keys())[:10]}")


def test_get_tags(api):
    """GET /_lfe/tags"""
    resp = api.get_raw("/_lfe/tags")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:200]}"
    data = resp.json()
    assert isinstance(data, dict)
    print(f"  Keys: {list(data.keys())[:10]}")


def test_get_ranking(api):
    """GET /ranking - Gu-rating ranking."""
    resp = api.get_lentille("/ranking", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:200]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_ranking_elo(api):
    """GET /ranking/elo - Elo rating ranking."""
    resp = api.get_lentille("/ranking/elo", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:200]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_notifications(api):
    """GET /user/notification - Changed from DataResponse to LentilleDataResponse."""
    resp = api.get_lentille("/user/notification", params={"page": 1})
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:200]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
