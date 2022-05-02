// Packages
import styled from "@emotion/styled"
import SVG from "react-inlinesvg"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled(SVG)<styleProps>`
    display: inline-flex;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    align-items: center;
    justify-content: center;
    fill: ${props => props.color};
    /* width: 100%;
    height: 100%; */

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: ${props => props.color};
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${props => props.color};
    }
`

export { Container }
