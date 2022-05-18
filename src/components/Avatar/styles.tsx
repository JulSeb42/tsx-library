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
        alignItems: "center",
        justifyContent: "center",
        inline: true,
    })};
    font-size: ${({ size }) => `${size && size * 0.7}px`};
    line-height: 100%;
    background-color: ${Mixins.Background};
    color: ${Mixins.Color};
    font-weight: ${Variables.FontWeights.Black};
`

export { Container }
