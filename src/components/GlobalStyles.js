import { createGlobalStyle } from 'styled-components/macro';
import { BASE_FONT_SIZE } from '../config';

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

    html {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
    body { ont-weight: 300;font-family: "Lato", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;color: #393939;margin: 0px }

    /********* layout ********************/
    *, *:before, *:after {-webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;  }
    .grid { display: -webkit-box;display: -moz-box;display: -webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flexbox; display: flex; -webkit-flex-direction:row;-moz-flex-direction:row; -o-flex-direction:row; -ms-flex-direction:row; flex-direction: row; }
    .grid.wrap {-webkit-box-wrap:wrap;-moz-box-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}
    .grid.column-orient {-webkit-box-orient: vertical;-moz-box-orient: vertical;-webkit-flex-direction:column;-moz-flex-direction:column; -o-flex-direction:column; -ms-flex-direction:column; flex-direction:column;}
    .grid.row-orient {-webkit-box-orient: horizontal;-moz-box-orient: horizontal;-webkit-flex-direction:row;-moz-flex-direction:row; -o-flex-direction:row; -ms-flex-direction:row; flex-direction: row;}
    .grid.managed-width, .grid-cell.managed-width {width:100%;max-width:1600px;}
    .grid.narrow-width, .grid-cell.narrow-width {width: 100vw;max-width: 850px;}
    .grid.borders div {border-bottom: 1px solid #aaa;border-left: 1px solid #aaa;}
    .grid.borders.first-row div {border-top: 1px solid #aaa;font-weight:700;background: #eaeaea;background: -moz-linear-gradient(top,  #eaeaea 0%, #d8d8d8 100%);background: -webkit-linear-gradient(top,  #eaeaea 0%,#d8d8d8 100%);background: linear-gradient(to bottom,  #eaeaea 0%,#d8d8d8 100%);}
    .grid.borders div:last-child {border-right: 1px solid #aaa;}
    .grid.center {-webkit-align-content: center;-moz-align-content: center;-ms-align-content: center;align-content: center;-webkit-align-items: center;-moz-align-items: center;-ms-align-items: center;align-items: center; }
    .grid.nowrap {-moz-box-wrap:nowrap!important;flex-wrap:nowrap!important;-ms-box-wrap:nowrap!important;}
    .grid.bottom{-webkit-justify-content: flex-end;-moz-justify-content: flex-end;-ms-justify-content: flex-end;justify-content: flex-end;-webkit-align-content: flex-end;-moz-align-content: flex-end;-ms-align-content: flex-end;align-content: flex-end;-webkit-align-items: flex-end;-moz-align-items: flex-end;-ms-align-items: flex-end;align-items: flex-end;}
    .grid.baseline {align-items:baseline;-webkit-align-items:baseline;-moz-align-items: baseline;-ms-align-items: baseline;}
    .grid.justify-center {-webkit-justify-content: center;-moz-justify-content: center;-ms-justify-content: center;justify-content: center;}
    .grid.justify-space {-moz-justify-content:space-between;-ms-justify-content:space-between;-webkit-justify-content:space-between;justify-content:space-between;}
    .grid.justify-space-around {justify-content:space-around;-moz-justify-content:space-around;-ms-justify-content:space-around;-webkit-justify-content:space-around;}
    .grid.justify-end {justify-content:flex-end;-moz-justify-content:flex-end;-ms-justify-content:flex-end;-webkit-justify-content:flex-end;}
    .grid.justify-start {justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-webkit-justify-content:flex-start;}
    .grid-cell {-webkit-box-flex:1 1 auto;-moz-box-flex:1 1 auto;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}
    .grid-cell.no-basis{-webkit-box-flex:1 1 0;-moz-box-flex:1 1 0;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;}
    .grid-cell.double-size {-webkit-flex-grow:2;-moz-flex-grow:2;flex-grow:2;-ms-flex-grow:2;}
    .grid-cell.noflex {-webkit-box-flex:0 0 auto;-moz-box-flex:0 0 auto;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}
    .grid-cell.center {-webkit-align-self:center;-align-self:center;-moz-align-self:center;-ms-align-self:center;text-align:center;align-self:center;}
    .grid-cell.end {-webkit-align-self:flex-end;-align-self:flex-end;-moz-align-self:flex-end;-ms-align-self:flex-end;align-self:flex-end}
    .grid-cell.baseline {-webkit-align-self:baseline;-align-self:baseline;-moz-align-self:baseline;-ms-align-self:baseline;align-self:baseline;}
    .grid-cell.grow0{-webkit-box-flex:0 0 auto;-moz-box-flex:0 0 auto;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}
    .grid-cell.grow1{-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;-ms-flex-grow:1;}
    .grid-cell.grow2{-webkit-flex-grow:2;-moz-flex-grow:2;flex-grow:2;-ms-flex-grow:2;}
    .grid-cell.grow3{-webkit-flex-grow:3;-moz-flex-grow:3;flex-grow:3;-ms-flex-grow:3;}
`;

export default GlobalStyle;
