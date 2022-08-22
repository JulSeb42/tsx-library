/*=============================================== Hr ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"

import { LibColorsTypes, ColorsShortTypes } from "../common-types"

/*==================== Component ====================*/

const Hr = ({ color = "gray-200", height = 1, ...props }: Props) => (
    <StyledHr $color={color} $height={height} {...props} />
)

export default Hr

/*==================== Styles ====================*/

const StyledHr = styled.hr<StyleProps>`
    width: 100%;
    height: ${({ $height }) => $height}px;
    border: none;
    background-color: ${Mixins.AllColors};
    display: block;
`

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLHRElement> {
    $color?: LibColorsTypes | ColorsShortTypes | string
    $height?: number
}

interface Props extends React.HTMLAttributes<HTMLHRElement> {
    color?: LibColorsTypes | ColorsShortTypes | string
    height?: number
}
