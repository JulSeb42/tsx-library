/*=============================================== Icon styles ===============================================*/

import styled from "styled-components"
import SVG from "react-inlinesvg"

import { AllColorsTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledIcon = styled(SVG)<{
    $size?: number
    $color?: AllColorsTypes
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${({ theme, $color }) => theme.AllColors({ $color: $color })};

    path {
        fill: ${({ theme, $color }) => theme.AllColors({ $color: $color })};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
