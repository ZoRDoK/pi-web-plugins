# pi-web-plugins

Monorepo for standalone Pi Web plugin packages.

## Plugins

- [`@zordok/pi-web-plugin-ideas`](plugins/pi-ideas) — Workspace Ideas panel for Pi Web.

## Install

After the package is published:

```bash
pi install npm:@zordok/pi-web-plugin-ideas
```

For development or pre-release testing from GitHub:

```bash
pi install git:github.com/ZoRDoK/pi-web-plugins
```

Restart/reload Pi Web after installation. Pi Web discovers `piWeb.plugins` from installed Pi packages and serves the plugin from `/pi-web-plugins/manifest.json`.

## Development

```bash
npm install
npm run verify
npm run pack:dry
```

Quality gates:

- TypeScript typecheck
- ESLint
- Knip dead-code check
- Gitleaks secret scan
- Vitest tests
- TypeScript build
