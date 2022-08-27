/*=============================================== Icon styles ===============================================*/

import styled from "styled-components"
import SVG from "react-inlinesvg"

import Mixins from "../../Mixins"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

const StyledIcon = styled(SVG)<{
    $size?: number
    $color?: LibColorsTypes | ColorsShortTypes | string
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${Mixins.AllColors};

    path {
        fill: ${Mixins.AllColors};
    }
`

export { StyledIcon }
