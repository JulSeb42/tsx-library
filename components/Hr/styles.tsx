/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import setDefaultTheme from "../../utils/setDefaultTheme"
import { stringifyPx } from "ts-utils-julseb"

import { AllColorsTypes } from "../../utils/common-types"

const StyledHr = styled.hr<{
    $color?: AllColorsTypes
    $height?: number
    $width?: number | string
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => $height}px;
    border: none;
    background-color: ${({ theme }) => theme.AllColors};
    display: block;
`

setDefaultTheme([StyledHr])

export { StyledHr }
