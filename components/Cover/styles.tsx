/*=============================================== Cover styles ===============================================*/

import styled, { css } from "styled-components"

import { Spacers, Overlays } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SpacersTypes, AllColorsTypes } from "../../utils/common-types"

import { AlignTypes } from "./types"

/*==================== Styles ====================*/

const CoverImage = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export default CoverImage

const Content = styled.div<{
    $align?: AlignTypes
    $height?: number | string
    $gap?: SpacersTypes | string | number
    $color?: AllColorsTypes
}>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    ${({ $align, $gap }) =>
        Mixins.Flexbox({
            $alignItems: $align === "bottom" ? "flex-start" : "center",
            $justifyContent: $align === "bottom" ? "flex-end" : "center",
            $flexDirection: "column",
            $gap: $gap,
        })};
    padding: ${Spacers.XXL} 5%;
    text-align: ${({ $align }) => $align === "center" && "center"};
    color: ${({ theme }) => theme.AllColors};

    & > * {
        position: relative;
        top: 0;
    }
`

const StyledCover = styled.div<{
    $overlay?: "black" | "white" | "gradient-black" | "gradient-white"
    $height?: number | string
}>`
    position: relative;
    width: 100%;
    height: ${({ $height }) => $height};

    ${({ $overlay, theme }) =>
        $overlay &&
        css`
            ${""/* ${Content} {
                color: ${$overlay === "white" || $overlay === "gradient-white"
                    ? theme.Black
                    : theme.White} !important;
            } */}

            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                background: ${$overlay === "white"
                    ? Overlays.Plain.White50
                    : $overlay === "gradient-black"
                    ? Overlays.Gradient.Black
                    : $overlay === "gradient-white"
                    ? Overlays.Gradient.White
                    : Overlays.Plain.Black50};
            }
        `}
`

setDefaultTheme([Content, StyledCover, CoverImage])

export { Content, StyledCover }
