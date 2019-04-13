import { BASE_FONT_SIZE } from '../config';

/**
 * Convert a font size to rem
 * @param {int} fontSize
 */
export const toRem = fontSize => `${fontSize / BASE_FONT_SIZE}rem`;

/**
 * Generates a function to get an arbitrary value from the theme
 * @param {string} area
 * @param {string} value
 */
export const fromTheme = (area, value) => ({ theme }) =>
  value ? theme[area][value] : theme[area];

/**
 * Generates a function to get a color from the theme,
 * based on the theme prop
 * @param {string} color
 * @param {string} shade
 *
 * Example usage:
 *  const StyledText = styled.p`
 *      color: ${color('text')};
 *  `;
 *
 * If the given color is an object, it will return the color defined by the
 * respective shade within the object, otherwise the value will be returned directly.
 *
 * Will return the primary color if called without any parameters.
 */
export const color = (color, shade = 'main') => ({ theme }) =>
  theme.palette[color] instanceof Object
    ? theme.palette[color][shade]
    : theme.palette[color];