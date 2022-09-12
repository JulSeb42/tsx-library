/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"

import { FontSizes, Spacers, Radiuses } from "../../Variables"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes } from "../../utils/common-types"

import { TagVariantsTypes } from "./types"

const StyledTag = styled.span<{
    $variant?: TagVariantsTypes
    $color?: AllColorsTypes
    $textColor?: AllColorsTypes
}>`
    font-size: ${FontSizes.Small};
    padding: ${({ $variant }) =>
        $variant === "pill"
            ? `${Spacers.XXS} ${Spacers.M}`
            : `${Spacers.XXS} ${Spacers.S}`};
    border-radius: ${({ $variant }) =>
        $variant === "pill" ? Radiuses.Round : Radiuses.S};
    background-color: ${({ theme }) => theme.AllColors};
    color: ${({ $color, $textColor, theme }) =>
        $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : $textColor
            ? theme.AllColors({ $color: $textColor })
            : theme.Background};
`

setDefaultTheme([StyledTag])

export { StyledTag }
