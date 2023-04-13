/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"

import { Mixins, Text } from "../../"
import type { SeparatorTypes } from "./types"
import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledBreadcrumbs = styled(Text)<{
    $separator?: SeparatorTypes
    $gap?: SpacersTypes
}>`
    ${({ $separator, $gap }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "flex-start",
            $flexWrap: "wrap",
            $gap: $gap ? $gap : $separator === "slash" ? "xs" : "xxs",
        })};
`

const Separator = styled.span<{
    $separator?: SeparatorTypes
    $customIcon?: boolean
}>`
    color: currentColor;
    position: relative;
    top: ${({ $separator, $customIcon }) =>
        ($separator === "icon" || $customIcon) && "4px"};
`

const Item = styled.span``

setDefaultTheme([StyledBreadcrumbs, Separator, Item])

export { StyledBreadcrumbs, Separator, Item }
