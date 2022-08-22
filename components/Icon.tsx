/*=============================================== Icon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import Mixins from "./Mixins"

import { Props as SVGProps } from "react-inlinesvg"
import { LibColorsTypes, ColorsShortTypes } from "../common-types"

/*==================== Component ====================*/

const Icon = ({ src, size = 24, color = "currentColor", ...props }: Props) => (
    <StyledIcon src={`/icons/${src}.svg`} $color={color} $size={size} {...props} />
)

export default Icon

/*==================== Types ====================*/

interface StyleProps extends SVGProps {
    $size?: number
    $color?: LibColorsTypes | ColorsShortTypes | string
}

interface Props extends SVGProps {
    src: string
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}

/*==================== Styles ====================*/

const StyledIcon = styled(SVG)<StyleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${Mixins.AllColors};

    path {
        fill: ${Mixins.AllColors};
    }
`
