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

    &.with-icon {
        ${Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "center",
            $gap: "xxs",
            $inline: true,
        })}
    }
`

const StyledTag = styled(BaseTag)<{
    $color?: ColorsShortTypes
    $variant?: TagVariantTypes
}>`
    background-color: ${({ theme, $variant, $color }) =>
        $variant === "outline" ? "transparent" : theme.AllColors({ $color })};
    color: ${({ $color, theme, $variant }) =>
        $variant === "outline"
            ? theme.AllColors({ $color })
            : Mixins.FontColorBackgroundShort({ $color })};
    border: 1px solid
        ${({ $variant, theme, $color }) =>
            $variant === "outline"
                ? theme.AllColors({ $color })
                : "transparent"};
`

setDefaultTheme([StyledTag])

export { StyledTag }
