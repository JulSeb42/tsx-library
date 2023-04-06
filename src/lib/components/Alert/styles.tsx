/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"

import { Spacers, Radiuses, Mixins } from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledAlert = styled.div<{
    $color: ColorsHoverTypes
    $isModal?: boolean
}>`
    ${Mixins.Grid({
        $gap: "s",
    })};
    padding: ${Spacers.M};
    width: ${({ $isModal }) => $isModal && "100%"};
    max-width: ${({ $isModal }) => $isModal && "400px"};
    border-radius: ${Radiuses.M};
    color: ${({ theme, $color }) =>
        $color === "white" ? theme.Black : theme.Font};
    background-color: ${({ $color, theme }) => theme.Colors50({ $color })};
    border: 1px solid ${({ theme }) => theme.ColorsShort};
`

setDefaultTheme([StyledAlert])

export { StyledAlert }
