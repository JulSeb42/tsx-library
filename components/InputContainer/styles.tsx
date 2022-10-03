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

const HelperBottomContainer = styled.span`
    ${Mixins.Flexbox({
        $gap: "xxs",
    })};
`

const HelperBottom = styled(Text).attrs({ tag: "small" })<{
    $style?: "default" | "italic"
}>`
    font-style: ${({ $style }) => $style === "italic" && "italic"};
`

const IconContainer = styled.span`
    height: 21px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

setDefaultTheme([
    StyledInputContainer,
    Label,
    HelperBottom,
    HelperBottomContainer,
    IconContainer,
])

export {
    StyledInputContainer,
    Label,
    HelperBottomContainer,
    HelperBottom,
    IconContainer,
}
