/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"

import { FontSizes, Mixins, Radiuses, Spacers } from "../../"
import type { ColorsShortTypes } from "../../types"
import type { TagVariantTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const BaseTag = styled.span`
    font-size: ${FontSizes.Small};
    border-radius: ${Radiuses.S};
    padding: ${Spacers.XXS} ${Spacers.S};
`

const TagColor = styled(BaseTag)<{
    $color?: ColorsShortTypes
    $variant?: TagVariantTypes
}>`
    background-color: ${({ theme, $variant }) =>
        $variant === "outline" ? "transparent" : theme.AllColors};
    color: ${({ $color, theme, $variant }) =>
        $variant === "outline"
            ? theme.AllColors
            : Mixins.FontColorBackgroundShort({ $color })};
    border: 1px solid
        ${({ $variant, theme }) =>
            $variant === "outline" ? theme.AllColors : "transparent"};
`

const StyledTag = styled(TagColor)<{
    $hasIcon?: boolean
}>`
    ${({ $hasIcon }) =>
        $hasIcon &&
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "center",
            $gap: "xxs",
            $inline: true,
        })};
`

setDefaultTheme([StyledTag])

export { StyledTag }
