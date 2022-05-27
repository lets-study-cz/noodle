import { createStitches } from '@stitches/react';
import { colors } from './colors';
import { radii } from './radii';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { space } from './space';
import { transitions } from './transitions';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography';
import { zIndices } from './zIndices';

export const {
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config,
  createTheme,
} = createStitches({
  theme: {
    colors: colors.light,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    space,
    sizes,
    zIndices,
    shadows,
    transitions,
  },
});

export const darkTheme = createTheme({
  colors: colors.dark,
});
