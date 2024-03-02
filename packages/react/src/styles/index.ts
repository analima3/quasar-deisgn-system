import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  raddi,
  space,
} from "@quasar-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    space,
    raddi,
    fontSizes,
    fontWeights,
    lineHeights,
    fonts,
  },
});
