/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import { stringifyPx, Mixins } from "../../"
import { AllColorsTypes, SpacersTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledHr = styled.hr<{
    $width?: string | number
    $height?: number
    $color?: AllColorsTypes
    $margin?: SpacersTypes | "0 auto" | "auto"
    $marginLeft?: SpacersTypes
    $marginTop?: SpacersTypes
    $marginRight?: SpacersTypes
    $marginBottom?: SpacersTypes
}>`
    border: none;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    background-color: ${({ $color, theme }) => theme.AllColors({ $color })};
    margin: ${({ $margin }) =>
        $margin === "0 auto"
            ? "0 auto"
            : $margin === "auto"
            ? "auto"
            : Mixins.Spacers({ $spacer: $margin })};
    margin-left: ${({ $marginLeft }) =>
        Mixins.Spacers({ $spacer: $marginLeft })};
    margin-top: ${({ $marginTop }) => Mixins.Spacers({ $spacer: $marginTop })};
    margin-right: ${({ $marginRight }) =>
        Mixins.Spacers({ $spacer: $marginRight })};
    margin-bottom: ${({ $marginBottom }) =>
        Mixins.Spacers({ $spacer: $marginBottom })};
`

setDefaultTheme([StyledHr])

export { StyledHr }
