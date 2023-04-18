/*=============================================== Cover styles ===============================================*/

import styled from "styled-components"

import { Flexbox, Image, Overlays } from "../../"

import { setDefaultTheme } from "../../utils"

const CoverImage = styled(Image).attrs({ width: "100%", fit: "cover" })`
    position: fixed;
    top: 0;
    left: 0;
`

const Content = styled(Flexbox)`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;

    &[data-overlay="black"],
    &[data-overlay="gradient-black"] {
        color: ${({ theme }) => theme.White};
    }

    &[data-overlay="white"],
    &[data-overlay="gradient-white"] {
        color: ${({ theme }) => theme.Black};
    }

    & > * {
        position: relative;
        top: 0;
    }
`

const StyledCover = styled.div`
    position: relative;
    width: 100%;
    height: var(--cover-height, 100vh);

    &:not([data-overlay="none"]) {
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
        }
    }

    &[data-overlay="white"]:before {
        background: ${Overlays.Plain.White50};
    }

    &[data-overlay="black"]:before {
        background: ${Overlays.Plain.Black50};
    }

    &[data-overlay="gradient-white"]:before {
        background: ${Overlays.Gradient.White};
    }

    &[data-overlay="gradient-black"]:before {
        background: ${Overlays.Gradient.Black};
    }
`

setDefaultTheme([StyledCover, Content, CoverImage])

export { StyledCover, Content, CoverImage }
