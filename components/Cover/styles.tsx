/*=============================================== Cover styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { SpacersTypes } from "../../utils/common-types"

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
}>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    color: ${Variables.Colors.White};
    width: 100%;
    height: 100%;
    ${({ $align, $gap }) =>
        Mixins.Flexbox({
            $alignItems: $align === "bottom" ? "flex-start" : "center",
            $justifyContent: $align === "bottom" ? "flex-end" : "center",
            $flexDirection: "column",
            $gap: $gap || "s",
        })};
    padding: ${Variables.Spacers.XXL} 5%;
    text-align: ${({ $align }) => $align === "center" && "center"};

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

    ${({ $overlay }) =>
        $overlay &&
        css`
            ${Content} {
                color: ${$overlay === "white" || $overlay === "gradient-white"
                    ? Variables.Colors.Black
                    : Variables.Colors.White};
            }

            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                background: ${$overlay === "white"
                    ? Variables.Overlays.Plain.White50
                    : $overlay === "gradient-black"
                    ? Variables.Overlays.Gradient.Black
                    : $overlay === "gradient-white"
                    ? Variables.Overlays.Gradient.White
                    : Variables.Overlays.Plain.Black50};
            }
        `}
`

export { Content, StyledCover }
