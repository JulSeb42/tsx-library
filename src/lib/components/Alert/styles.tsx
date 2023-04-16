/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"

import { Mixins, Radiuses, Spacers } from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseAlert = styled.div`
    width: 100%;
    max-width: var(--alert-max-width, 100%);
    padding: ${Spacers.S};
    border-radius: ${Radiuses.M};
    ${Mixins.Flexbox({
        $gap: "s",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    border: 1px solid;
`

const StyledAlert = styled(BaseAlert)<{
    $color: ColorsHoverTypes
}>`
    color: ${({ $color }) => Mixins.FontColorBackground50({ $color })};
    border-color: ${({ $color, theme }) =>
        theme.ColorsHoverDefault({ $color })};
    background-color: ${({ theme, $color }) => theme.Colors50({ $color })};
`

setDefaultTheme([StyledAlert])

export { StyledAlert }
