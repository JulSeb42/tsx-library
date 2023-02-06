/*=============================================== Cover styles ===============================================*/

import styled, { css } from "styled-components"

import { stringifyPx, Spacers, Overlays, Mixins, Image } from "../../"
import { SpacersTypes, AllColorsTypes } from "../../types"
import { CoverAlignTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const CoverImage = styled(Image).attrs({ width: "100%", fit: "cover" })`
    position: fixed;
    top: 0;
    left: 0;
`

const Content = styled.div<{
    $align?: CoverAlignTypes
    $height?: number | string
    $gap?: SpacersTypes
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
    height: ${({ $height }) => stringifyPx($height)};

    ${({ $overlay }) =>
        $overlay &&
        css`
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

setDefaultTheme([StyledCover, Content, CoverImage])

export { StyledCover, Content, CoverImage }
