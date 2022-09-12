/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"
import Text from "../Text"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SeparatorTypes } from "./types"

const StyledBreacrumbs = styled(Text)<{ $separator?: SeparatorTypes }>`
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

setDefaultTheme([StyledBreacrumbs, Separator, Item])

export { StyledBreacrumbs, Separator, Item }
