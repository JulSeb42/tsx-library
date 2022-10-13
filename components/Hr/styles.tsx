/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import setDefaultTheme from "../../utils/setDefaultTheme"
import { stringifyPx } from "ts-utils-julseb"
import Mixins from "../../Mixins"

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"

const StyledHr = styled.hr<{
    $color?: AllColorsTypes
    $height?: number
    $width?: number | string
    $margin?: number | SpacersTypes | "0 auto" | "auto"
    $marginLeft?: number | SpacersTypes
    $marginTop?: number | SpacersTypes
    $marginRight?: number | SpacersTypes
    $marginBottom?: number | SpacersTypes
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => $height}px;
    border: none;
    background-color: ${({ theme }) => theme.AllColors};
    display: block;
    margin: ${({ $margin }) =>
        $margin &&
        ($margin === "0 auto"
            ? "0 auto"
            : $margin === "auto"
            ? "auto"
            : Mixins.Spacers({ $spacer: $margin }))};
    margin-left: ${({ $marginLeft }) =>
        $marginLeft && Mixins.Spacers({ $spacer: $marginLeft })};
    margin-top: ${({ $marginTop }) =>
        $marginTop && Mixins.Spacers({ $spacer: $marginTop })};
    margin-right: ${({ $marginRight }) =>
        $marginRight && Mixins.Spacers({ $spacer: $marginRight })};
    margin-bottom: ${({ $marginBottom }) =>
        $marginBottom && Mixins.Spacers({ $spacer: $marginBottom })};
`

setDefaultTheme([StyledHr])

export { StyledHr }
