/*=============================================== BackToTop styles ===============================================*/

import styled from "styled-components"

import { Transitions, Mixins, Text } from "../../"
import type { SpacersTypes, PositionsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledBackToTop = styled.div<{
    $isVisible?: boolean
    $position?: PositionsTypes
    $left?: SpacersTypes
    $top?: SpacersTypes
    $right?: SpacersTypes
    $bottom?: SpacersTypes
    $zIndex?: number
}>`
    ${({ $position, $left, $top, $right, $bottom, $zIndex }) =>
        Mixins.Position({ $position, $left, $top, $right, $bottom, $zIndex })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
        $flexDirection: "row-reverse",
    })};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    transition: ${Transitions.Short};
    z-index: ${({ $zIndex }) => $zIndex};
`

const ButtonText = styled(Text).attrs({ tag: "small" })<{
    $isVisible?: boolean
}>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    transition: ${Transitions.Short};
`

setDefaultTheme([StyledBackToTop, ButtonText])

export { StyledBackToTop, ButtonText }
