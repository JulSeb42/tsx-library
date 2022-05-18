// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled.span<styleProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    overflow: hidden;
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    font-size: calc(${({ size }) => size}px * 0.7);
    line-height: 100%;
    background-color: ${Mixins.Color};
    color: ${({ textColor, color }) =>
        textColor
            ? Mixins.TextColor
            : color === "white"
            ? Variables.Colors.Primary500
            : Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Black};
`

export { Container }
