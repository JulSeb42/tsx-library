/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsShortTypes } from "../../utils/common-types"

const StyledAlert = styled.div<{
    $color: ColorsShortTypes
    $isModal?: boolean
}>`
    ${Mixins.Grid({
        $gap: "s",
    })};
    padding: ${Variables.Spacers.M};
    width: ${({ $isModal }) => $isModal && "100%"};
    max-width: ${({ $isModal }) => $isModal && "400px"};
    border-radius: ${Variables.Radiuses.M};
    color: ${({ $color }) =>
        $color === "black" ? Variables.Colors.White : Variables.Colors.Black};
    background-color: ${({ $color }) =>
        $color === "secondary"
            ? Variables.Colors.Secondary50
            : $color === "success"
            ? Variables.Colors.Success50
            : $color === "danger"
            ? Variables.Colors.Danger50
            : $color === "warning"
            ? Variables.Colors.Warning50
            : $color === "gray"
            ? Variables.Colors.Gray50
            : $color === "black"
            ? Variables.Colors.Gray800
            : $color === "white"
            ? Variables.Colors.Gray50
            : Variables.Colors.Primary50};
    border: 1px solid ${Mixins.ColorsShort};
`

export { StyledAlert }
