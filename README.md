# n10nce browser extension

A personal Chrome extension. Currently overrides the **new tab** page to show
the brand logo, centered, framed in the site's blueprint style — gutter grid,
bordered column, corner plus-marks, and hatch dividers (light + dark aware).

Built with [WXT](https://wxt.dev), React 19, Tailwind v4, and a shadcn-ready
foundation.

## Develop

```bash
pnpm dev        # launches Chrome with the extension loaded + HMR
pnpm build      # production build → .output/chrome-mv3
pnpm compile    # type-check
```

## Load the built extension manually

1. `pnpm build`
2. Open `chrome://extensions` and enable **Developer mode**
3. **Load unpacked** → select `.output/chrome-mv3`
4. Open a new tab

## Layout

- `entrypoints/newtab/` — the new-tab page (`App.tsx`, `App.css`)
- `components/shared/logo-icon.tsx` — the logo mark
- `assets/theme.css` — brand tokens + Tailwind theme (light/dark)
- `lib/cn.ts` — `cn()` helper
- `components.json` — shadcn config; add components with
  `pnpm dlx shadcn@latest add <name>` (drops into `components/ui`)
