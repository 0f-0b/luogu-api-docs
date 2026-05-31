"""Team API tests."""

from client import TEAM_ID_START


def test_get_team(api):
    """GET /team/:id"""
    resp = api.get_lentille(f"/team/{TEAM_ID_START}")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_my_teams(api):
    """GET /user/mine/team"""
    resp = api.get_lentille("/user/mine/team")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_team_members(api):
    """GET /team/:id/member"""
    resp = api.get_lentille(f"/team/{TEAM_ID_START}/member")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")


def test_get_team_problems(api):
    """GET /team/:id/problem - 403 if not a member."""
    resp = api.get_lentille(f"/team/{TEAM_ID_START}/problem")
    assert resp.status_code in (200, 403), f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    print(f"  Status: {resp.status_code} (403 = not a member)")


def test_get_team_trainings(api):
    """GET /team/:id/training - 403 if not a member."""
    resp = api.get_lentille(f"/team/{TEAM_ID_START}/training")
    assert resp.status_code in (200, 403), f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    print(f"  Status: {resp.status_code} (403 = not a member)")


def test_get_team_contests(api):
    """GET /team/:id/contest"""
    resp = api.get_lentille(f"/team/{TEAM_ID_START}/contest")
    assert resp.status_code == 200, f"Status: {resp.status_code}, Body: {resp.text[:300]}"
    data = resp.json()
    print(f"  Response keys: {list(data.keys())}")
