"""Luogu API test client."""

import json
import re
from pathlib import Path

import httpx

BASE_URL = "https://www.luogu.com.cn"
COOKIE_FILE = Path(__file__).parent.parent / "cookies" / "1.json"
TEAM_ID_START = 1000

# Well-known IDs for testing
TEST_UID = None  # Will be set from cookie
TEST_PID = "P1001"
TEST_CONTEST_ID = None  # Will try to find one
TEAM_ID = TEAM_ID_START


def load_cookies() -> dict[str, str]:
    """Load luogu.com.cn cookies from browser export."""
    data = json.loads(COOKIE_FILE.read_text(encoding="utf-8"))
    cookies = {}
    for c in data:
        if "luogu" in c.get("domain", ""):
            cookies[c["name"]] = c["value"]
    return cookies


def make_ua() -> str:
    """User-Agent that passes Luogu's checks (no python-requests, not starting with mozilla/)."""
    return "LuoguApiTest/1.0"


class LuoguClient:
    def __init__(self):
        self.cookies = load_cookies()
        self.session = httpx.Client(
            base_url=BASE_URL,
            cookies=self.cookies,
            headers={
                "user-agent": make_ua(),
            },
            follow_redirects=True,
            timeout=30.0,
        )
        self._csrf_token: str | None = None
        self._uid: int | None = None

    @property
    def uid(self) -> int | None:
        if self._uid is None:
            uid_str = self.cookies.get("_uid")
            if uid_str:
                self._uid = int(uid_str)
        return self._uid

    def get_csrf_token(self) -> str:
        """Fetch CSRF token from the homepage HTML."""
        if self._csrf_token:
            return self._csrf_token
        resp = self.session.get("/")
        match = re.search(r'<meta\s+name="csrf-token"\s+content="([^"]+)"', resp.text)
        if match:
            self._csrf_token = match.group(1)
            return self._csrf_token
        raise RuntimeError("Failed to extract CSRF token")

    def _data_headers(self) -> dict[str, str]:
        """Headers for DataResponse endpoints."""
        return {"x-luogu-type": "content-only"}

    def _lentille_headers(self) -> dict[str, str]:
        """Headers for LentilleDataResponse endpoints."""
        return {"x-lentille-request": "content-only"}

    def _post_headers(self) -> dict[str, str]:
        """Headers for POST requests."""
        return {
            "referer": "https://www.luogu.com.cn/",
            "x-csrf-token": self.get_csrf_token(),
            "content-type": "application/json",
        }

    def get_data(self, path: str, params: dict | None = None) -> httpx.Response:
        """GET with DataResponse headers."""
        return self.session.get(path, params={**(params or {}), "_contentOnly": ""}, headers=self._data_headers())

    def get_lentille(self, path: str, params: dict | None = None) -> httpx.Response:
        """GET with LentilleDataResponse headers."""
        return self.session.get(path, params=params, headers=self._lentille_headers())

    def post_json(self, path: str, body: dict | None = None, params: dict | None = None) -> httpx.Response:
        """POST with JSON body and CSRF token."""
        return self.session.post(path, json=body, params=params, headers=self._post_headers())

    def post_form(self, path: str, data: dict | None = None, params: dict | None = None) -> httpx.Response:
        """POST with form-urlencoded body and CSRF token."""
        headers = {
            "referer": "https://www.luogu.com.cn/",
            "x-csrf-token": self.get_csrf_token(),
            "content-type": "application/x-www-form-urlencoded",
        }
        return self.session.post(path, data=data, params=params, headers=headers)

    def delete(self, path: str) -> httpx.Response:
        """DELETE with CSRF token."""
        return self.session.request("DELETE", path, headers=self._post_headers())

    def get_raw(self, path: str, params: dict | None = None) -> httpx.Response:
        """Plain GET without special headers."""
        return self.session.get(path, params=params)

    def get_html_data(self, path: str, params: dict | None = None) -> dict | None:
        """GET HTML page and extract embedded JSON from <script> tags.

        Luogu SSR pages embed the initial state as JSON inside a <script> tag.
        Returns the parsed JSON dict, or None if not found.
        """
        resp = self.session.get(path, params=params)
        if resp.status_code != 200:
            return None
        # Find all <script> tag contents
        scripts = re.findall(r"<script[^>]*>\s*(.*?)\s*</script>", resp.text, re.DOTALL)
        for s in scripts:
            s = s.strip()
            if not s or s.startswith("window.") or s.startswith("//"):
                continue
            try:
                data = json.loads(s)
                if isinstance(data, dict) and "status" in data and "data" in data:
                    return data
            except (json.JSONDecodeError, ValueError):
                continue
        return None
