---
'@open-slide/core': patch
---

Refactor the dev-server Vite plugins: extract pure logic out of the monolithic `comments-plugin` and `files-plugin` into per-domain modules (`editing/`, `files/`, `http/`), and consolidate every `/__*` HTTP endpoint into a single `api-plugin` whose route handlers live under `vite/routes/` (one file per endpoint group with a manifest comment up top). No public API change.
