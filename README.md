# gatsby-plugin-vanilla-extract

Gatsby plugin which wraps the [vanilla-extract](https://github.com/seek-oss/vanilla-extract) project for easy use in Gatsby.

## Setup

`yarn add gatsby-plugin-vanilla-extract`

Add to your site's `gatsby-config.js`.

```js
module.exports = {
  plugins: [`gatsby-plugin-vanilla-extract`],
};
```

## How to use

See the [vanilla-extract README](https://github.com/seek-oss/vanilla-extract) for full documentation.

Simple example.

`src/pages/index.ts`

```tsx
import * as React from "react";

import { className } from "./index.css.ts";

export default function Index() {
  return <div className={className}>Pizza</div>;
}
```

`src/pages/index.css.ts`

```ts
import { style } from "@vanilla-extract/css";

export const className = style({
  background: "red",
});
```
