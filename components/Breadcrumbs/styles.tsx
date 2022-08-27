/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"
import Text from "../Text"

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

const Separator = styled.span<{ $separator?: SeparatorTypes }>`
    color: currentColor;
    position: relative;
    top: ${({ $separator }) => $separator === "icon" && "4px"};
`

const Item = styled.span``

export { StyledBreacrumbs, Separator, Item }
