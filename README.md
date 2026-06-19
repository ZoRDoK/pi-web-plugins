# pi-web-plugins

Standalone Pi Web plugins installable as Pi packages.

## Plugins

- [`plugins/pi-ideas`](plugins/pi-ideas) — Workspace Ideas panel for Pi Web.

## Install from GitHub

```bash
pi install git:github.com/ZoRDoK/pi-web-plugins
```

Restart/reload Pi Web after installation. Pi Web discovers `piWeb.plugins` from installed Pi packages and serves the plugin from `/pi-web-plugins/manifest.json`.

## Development

```bash
npm install
npm run verify
```

Quality gates:

- TypeScript typecheck
- ESLint
- Knip dead-code check
- Gitleaks secret scan
- Vitest tests
- TypeScript build
