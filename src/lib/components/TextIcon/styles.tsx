/*=============================================== TextIcon styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledTextIcon = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "flex-start",
        $gap: "xxs",
    })};
`

const IconContainer = styled.span`
    height: var(--text-icon-container-size, calc(16px * 1.5));
    display: inline-block;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
`

setDefaultTheme([StyledTextIcon, IconContainer])

export { StyledTextIcon, IconContainer }
