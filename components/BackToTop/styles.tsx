/*=============================================== BackToTop styles ===============================================*/

import styled, { css } from "styled-components"

import { Transitions } from "../../Variables"
import Mixins from "../../Mixins"
import Text from "../Text"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SpacersTypes, PositionsTypes } from "../../utils/common-types"

const StyledBackToTop = styled.div<{
    ref?: any
    $isVisible?: boolean
    $position?: PositionsTypes
    $left?: number | string | SpacersTypes
    $top?: number | string | SpacersTypes
    $right?: number | string | SpacersTypes
    $bottom?: number | string | SpacersTypes
    $zIndex?: number
}>`
    position: ${({ $position }) => $position};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
        $flexDirection: "row-reverse",
    })};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    transition: ${Transitions.Short};
    z-index: ${({ $zIndex }) => $zIndex};

    ${({ $left }) =>
        $left &&
        css`
            left: ${Mixins.Spacers({ $spacer: $left })};
        `}

    ${({ $top }) =>
        $top &&
        css`
            top: ${Mixins.Spacers({ $spacer: $top })};
        `}

    ${({ $right }) =>
        $right &&
        css`
            right: ${Mixins.Spacers({ $spacer: $right })};
        `}

    ${({ $bottom }) =>
        $bottom &&
        css`
            bottom: ${Mixins.Spacers({ $spacer: $bottom })};
        `}
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
