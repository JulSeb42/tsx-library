/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import { stringifyPx, Mixins, Radiuses } from "../../"
import type { AllColorsTypes, SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledHr = styled.hr<{
    $width?: string | number
    $height?: number
    $color?: AllColorsTypes
    $margin?: SpacersTypes | "0 auto" | "auto"
    $marginLeft?: SpacersTypes
    $marginTop?: SpacersTypes
    $marginRight?: SpacersTypes
    $marginBottom?: SpacersTypes
    $rounded?: boolean
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
    border-radius: ${({ $rounded }) => $rounded && Radiuses.Round};
`

setDefaultTheme([StyledHr])

export { StyledHr }
