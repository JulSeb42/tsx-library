/*=============================================== InputContainer styles ===============================================*/

import styled from "styled-components"

import { FontWeights } from "../../Variables"
import Mixins from "../../Mixins"
import Text from "../Text"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ColorsHoverTypes } from "../../utils/common-types"

const StyledInputContainer = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
`

const Label = styled.label<{
    $color?: ColorsHoverTypes
}>`
    color: ${({ theme }) => theme.AllColors};
    font-weight: ${FontWeights.Black};
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

setDefaultTheme([StyledInputContainer, Label, HelperBottom, IconContainer])

export { StyledInputContainer, Label, HelperBottom, IconContainer }
