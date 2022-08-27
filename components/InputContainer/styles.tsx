/*=============================================== InputContainer styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Text from "../Text"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

const StyledInputContainer = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
`

const Label = styled.label<{
    $color?: LibColorsTypes | ColorsShortTypes | string
}>`
    color: ${({ $color }) =>
        Mixins.AllColors({ $color: $color || Variables.Colors.Primary500 })};
    font-weight: ${Variables.FontWeights.Black};
`

const HelperBottom = styled(Text)`
    ${Mixins.Flexbox({
        $gap: "xxs",
    })};
`

const IconContainer = styled.span`
    height: 21px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

export { StyledInputContainer, Label, HelperBottom, IconContainer }
