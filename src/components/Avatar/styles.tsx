// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.span<styleProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: calc(${props => props.size}px * 0.7);
    line-height: 100%;
    background-color: ${props => props.background};
    color: ${props => props.color};
    font-weight: ${Variables.FontWeights.Black};
`

export { Container }
