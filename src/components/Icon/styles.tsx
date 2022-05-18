// Imports
import styled from "styled-components"
import SVG from "react-inlinesvg"

import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled(SVG)<styleProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    fill: ${Mixins.Color};

    path {
        fill: ${Mixins.Color};
    }
`

export { Container }
