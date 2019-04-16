import { createGlobalStyle } from 'styled-components/macro';
import { BASE_FONT_SIZE } from '../config';
import { color, fromTheme } from '../helpers/theme';

const assumedBrowserDefaultFontSize = 16;

const GlobalStyle = createGlobalStyle`
    @font-face { font-family: 'Lato';   font-style: normal;   font-weight: 100;   src: local('Lato Hairline'), local('Lato-Hairline'), url(../resources/fonts/Lato-Hairline.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: normal;   font-weight: 300;   src: local('Lato Light'), local('Lato-Light'), url(../resources/fonts/Lato-Light.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: normal;   font-weight: 400;   src: local('Lato Regular'), local('Lato-Regular'), url(../resources/fonts/Lato-Regular.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: normal;   font-weight: 700;   src: local('Lato Bold'), local('Lato-Bold'), url(../resources/fonts/Lato-Bold.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: normal;   font-weight: 900;   src: local('Lato Black'), local('Lato-Black'), url(../resources/fonts/Lato-Black.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: italic;   font-weight: 100;   src: local('Lato Hairline Italic'), local('Lato-HairlineItalic'), url(../resources/fonts/Lato-HairlineItalic.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: italic;   font-weight: 300;   src: local('Lato Light Italic'), local('Lato-LightItalic'), url(../resources/fonts/Lato-LightItalic.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: italic;   font-weight: 400;   src: local('Lato Italic'), local('Lato-Italic'), url(../resources/fonts/Lato-Italic.woff) format('woff'); }
    @font-face { font-family: 'Lato';   font-style: italic;   font-weight: 700;   src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(../resources/fonts/Lato-BoldItalic.woff) format('woff'); }
    @font-face {font-family: 'Oswald';font-style: normal;font-weight: 300;src: local('Oswald Light'), local('Oswald-Light'), url(../resources/fonts/Oswald-light.ttf) format('truetype');}
    @font-face {font-family: 'Oswald';font-style: normal;font-weight: 400;src: local('Oswald Regular'), local('Oswald-Regular'), url(../resources/fonts/Oswald.ttf) format('truetype');}
    @font-face {font-family: 'Oswald';font-style: normal;font-weight: 700;src: local('Oswald Bold'), local('Oswald-Bold'), url(../resources/fonts/Oswald-Bold.ttf) format('truetype');}
    @font-face {font-family: 'Conv_DINBold'; font-style: normal; font-weight: normal; src: url('../resources/fonts/DINBold.woff') format('woff');}
    @font-face {font-family: 'Conv_DINCond'; font-weight: normal; font-style: normal;src: url('../resources/fonts/DINWeb-Cond.woff') format('woff');}
    @font-face {
      font-family: 'motivosity';
      src:
          url('../resources/fonts/motivosity.ttf?800214') format('truetype'),
          url('../resources/fonts/motivosity.woff?800214') format('woff'),
          url('../resources/fonts/motivosity.svg?800214#motivosity') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    html {
        font-family: "Lato", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif ;
        font-size: ${(BASE_FONT_SIZE / assumedBrowserDefaultFontSize) * 100}%;
        font-weight: normal;
    }
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* Remove visible outline for non-keyboard users */
    :focus:not(:focus-visible) { outline: none }
`;

export default GlobalStyle;
