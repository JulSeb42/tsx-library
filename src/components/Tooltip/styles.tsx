// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps, styleTipProps } from "./types"

const Container = styled.span<styleProps>`
    position: relative;
    color: ${Mixins.Color};
    font-weight: ${({ textStyle }) =>
        textStyle === "bold" && Variables.FontWeights.Bold};

    ${({ textStyle }) =>
        (textStyle === "dotted" || textStyle === "underline") &&
        css`
            border-bottom: 1px ${textStyle === "dotted" ? "dotted" : "solid"}
                currentColor;
        `}
`

const Tip = styled.span<styleTipProps>`
    position: absolute;
    width: 150px;
    background-color: ${Variables.Overlays.Plain.Black80};
    color: ${Variables.Colors.White};
    text-align: center;
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.M};
    z-index: 1;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: ${Variables.Transitions.Short};
    bottom: 125%;
    left: calc(50% - 150px / 2);
    font-size: ${Variables.FontSizes.Small};
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

    &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
        transition: ${Variables.Transitions.Short};
        border-color: ${Variables.Overlays.Plain.Black80} transparent
            transparent transparent;
        visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
    }
`

export { Container, Tip }
