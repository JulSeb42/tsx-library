/*=============================================== InputContainer styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins, Text } from "../../"
import { ColorsHoverTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

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

const Counter = styled(Text).attrs({ tag: "small", color: "gray" })`
    font-style: italic;
`

setDefaultTheme([
    StyledInputContainer,
    Label,
    HelperBottom,
    HelperBottomContainer,
    IconContainer,
    Counter,
])

export {
    StyledInputContainer,
    Label,
    HelperBottomContainer,
    HelperBottom,
    IconContainer,
    Counter,
}
