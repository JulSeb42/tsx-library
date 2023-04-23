/*=============================================== BackToTop styles ===============================================*/

import styled from "styled-components"

import { Mixins, Text, Transitions } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledBackToTop = styled.div`
    opacity: 0;
    visibility: hidden;
    transition: ${Transitions.Short};
    ${Mixins.Position({
        $position: "fixed",
        $right: "xxl",
        $bottom: "xxl",
        $zIndex: 999,
    })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
        $flexDirection: "row-reverse",
    })};

    &.visible {
        opacity: 1;
        visibility: visible;
    }
`

const ButtonText = styled(Text).attrs({ tag: "small" })`
    opacity: 0;
    visibility: hidden;
    transition: ${Transitions.Short};

    &.visible {
        opacity: 1;
        visibility: visible;
    }
`

setDefaultTheme([StyledBackToTop, ButtonText])

export { StyledBackToTop, ButtonText }
