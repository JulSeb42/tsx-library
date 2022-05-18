// Imports
import styled from "styled-components"

import Variables from "../Variables"
import { Color } from "../Mixins"

import { props } from "./types"

const Hr = styled.hr<props>`
    width: 100%;
    height: ${({ height }) => height}px;
    background-color: ${Color};
    border: none;
`

Hr.defaultProps = {
    height: 1,
    color: Variables.Colors.Gray200,
}

export default Hr
