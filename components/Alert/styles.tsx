/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"

import { Spacers, Radiuses, Mixins } from "../../"
import { ColorsAlertsTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledAlert = styled.div<{
    $color: ColorsAlertsTypes
    $isModal?: boolean
}>`
    ${Mixins.Grid({
        $gap: "s",
    })};
    padding: ${Spacers.M};
    width: ${({ $isModal }) => $isModal && "100%"};
    max-width: ${({ $isModal }) => $isModal && "400px"};
    border-radius: ${Radiuses.M};
    color: ${({ $color, theme }) =>
        $color === "black" ? theme.Background : theme.Font};
    background-color: ${({ $color, theme }) =>
        $color === "secondary"
            ? theme.Secondary50
            : $color === "success"
            ? theme.Success50
            : $color === "danger"
            ? theme.Danger50
            : $color === "warning"
            ? theme.Warning50
            : $color === "gray"
            ? theme.Gray50
            : $color === "black"
            ? theme.Gray800
            : $color === "white"
            ? theme.Gray50
            : theme.Primary50};
    border: 1px solid ${({ theme }) => theme.ColorsShort};
`

setDefaultTheme([StyledAlert])

export { StyledAlert }
