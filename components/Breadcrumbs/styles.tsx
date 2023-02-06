/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"

import { Mixins, Text } from "../../"
import { SeparatorTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledBreadcrumbs = styled(Text)<{ $separator?: SeparatorTypes }>`
    ${({ $separator }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "flex-start",
            $flexWrap: "wrap",
            $gap: $separator === "slash" ? "xs" : "xxs",
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
