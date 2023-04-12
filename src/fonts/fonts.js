import { css } from "styled-components";

// FONT ICON'S
import { pokemonSolidTTF } from "../fonts"


export const IconFontFace = css`
    @font-face {
        font-family: 'spotify';
        font-weight: normal;
        font-style: normal;
        src: url('${SpotifyEOT}?vvuwob');
        src: url('${SpotifyEOT}?vvuwob#iefix') format('embedded-opentype'),
             url('${SpotifyTTF}?vvuwob') format('truetype'),
             url('${SpotifyWOFF}?vvuwob') format('woff'),
             url('${SpotifySVG}?vvuwob#spotify') format('svg');
    }
`;

export const MainFontFace = css`
    @font-face {
        font-family: 'Circular-Light';
        font-weight: 300;
        font-style: normal;
        src: url('${CircularLightEOT}');
        src: url('${CircularLightEOT}') format('embedded-opentype'),
             url('${CircularLightTTF}') format('truetype'),
             url('${CircularLightWOFF}') format('woff2'),
             url('${CircularLightWOFF2}') format('woff'),
             url('${CircularLightSVG}') format('svg');
    }
    @font-face {
        font-family: 'Circular-Book';
        font-weight: 500;
        font-style: normal;
        src: url('${CircularBookEOT}');
        src: url('${CircularBookEOT}') format('embedded-opentype'),
             url('${CircularBookTTF}') format('truetype'),
             url('${CircularBookWOFF}') format('woff2'),
             url('${CircularBookWOFF2}') format('woff'),
             url('${CircularBookSVG}') format('svg');
    }
    @font-face {
        font-family: 'Circular-Bold';
        font-weight: bold;
        font-style: normal;
        src: url('${CircularBoldEOT}');
        src: url('${CircularBoldEOT}') format('embedded-opentype'),
             url('${CircularBoldTTF}') format('truetype'),
             url('${CircularBoldWOFF}') format('woff2'),
             url('${CircularBoldWOFF2}') format('woff'),
             url('${CircularBoldSVG}') format('svg');
    }
`;