"""Shared pytest fixtures."""

import pytest
from client import LuoguClient


@pytest.fixture(scope="session")
def api():
    """Shared Luogu API client for the test session."""
    c = LuoguClient()
    yield c
    c.session.close()
