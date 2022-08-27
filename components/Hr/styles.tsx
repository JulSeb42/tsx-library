/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

const StyledHr = styled.hr<{
    $color?: LibColorsTypes | ColorsShortTypes | string
    $height?: number
}>`
    width: 100%;
    height: ${({ $height }) => $height}px;
    border: none;
    background-color: ${Mixins.AllColors};
    display: block;
`

export { StyledHr }
