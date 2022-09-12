/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"

import { Spacers, Radiuses } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ColorsShortTypes } from "../../utils/common-types"

const StyledAlert = styled.div<{
    $color: ColorsShortTypes
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
