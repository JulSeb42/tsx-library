/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"

import { FontSizes, Mixins } from "../../"
import type {
    AllColorsTypes,
    SpacersTypes,
    PaddingTypes,
    RadiusesTypes,
} from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledTag = styled.span<{
    $color?: AllColorsTypes
    $textColor?: AllColorsTypes
    $hasIcon?: boolean
    $gap?: SpacersTypes
    $padding?: PaddingTypes
    $borderRadius?: RadiusesTypes
}>`
    font-size: ${FontSizes.Small};
    ${Mixins.Padding};
    ${Mixins.BorderRadius};
    background-color: ${({ theme }) => theme.AllColors};
    color: ${({ $color, $textColor, theme }) =>
        $textColor
            ? theme.AllColors({ $color: $textColor })
            : $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : theme.Background};

    ${({ $hasIcon, $gap }) =>
        $hasIcon &&
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "center",
            $gap,
            $inline: true,
        })};
`

setDefaultTheme([StyledTag])

export { StyledTag }
