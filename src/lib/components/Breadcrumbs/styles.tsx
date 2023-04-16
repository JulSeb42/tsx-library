/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"

import { Mixins, Text, Spacers } from "../../"
import type { ColorsHoverTypes } from "../../types"
import type { SeparatorTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const BaseBreadcrumbs = styled(Text).attrs({ tag: "p" })`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $flexWrap: "wrap",
    })};
`

const BreadcrumbsColor = styled(BaseBreadcrumbs)<{
    $color?: ColorsHoverTypes
}>`
    color: ${({ theme, $color }) => theme.ColorsHoverDefault({ $color })};

    a {
        color: ${({ theme, $color }) => theme.ColorsHoverDefault({ $color })};

        &:hover {
            color: ${({ theme, $color }) => theme.ColorsHoverHover({ $color })};
        }

        &:active {
            color: ${({ theme, $color }) =>
                theme.ColorsHoverActive({ $color })};
        }
    }
`

const StyledBreadcrumbs = styled(BreadcrumbsColor)<{
    $separator?: SeparatorTypes
}>`
    gap: ${({ $separator }) =>
        $separator === "slash" ? Spacers.XS : Spacers.XXS};
`

const BaseSeparator = styled.span`
    color: currentColor;
    position: relative;
`

const Separator = styled(BaseSeparator)<{
    $separator?: SeparatorTypes
    $customIcon?: boolean
}>`
    top: ${({ $separator, $customIcon }) =>
        ($separator === "icon" || $customIcon) && "4px"};
`

const Item = styled.span``

setDefaultTheme([StyledBreadcrumbs, Separator, Item])

export { StyledBreadcrumbs, Separator, Item }
