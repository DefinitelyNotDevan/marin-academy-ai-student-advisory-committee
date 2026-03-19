# /components/ui

This directory follows the **shadcn/ui** convention — it's the standard location
shadcn expects when you run `npx shadcn-ui add <component>`. Keeping components
here means you can add any other shadcn component (Button, Dialog, Card, etc.)
without changing import paths or config.

## Components

| File | Description |
|------|-------------|
| `aurora-background.tsx` | Animated aurora gradient background wrapper |
| `aurora-background-demo.tsx` | Marin Academy-branded hero demo using the aurora |

## Usage

```tsx
import { AuroraBackground } from "@/components/ui/aurora-background";

<AuroraBackground>
  <h1>Your content here</h1>
</AuroraBackground>
```

Props:
- `showRadialGradient` (boolean, default `true`) — adds a radial vignette mask so the aurora fades toward the bottom-left
- All standard `HTMLDivElement` props are passed through
