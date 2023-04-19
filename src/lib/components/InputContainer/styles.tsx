/*=============================================== InputContainer styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins, Text } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledInputContainer = styled.div`
    ${Mixins.Flexbox({
        $gap: "xxs",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
`

const Label = styled.label`
    color: ${({ theme }) => theme.Primary500};
    font-weight: ${FontWeights.Black};
`

const HelperBottomContainer = styled.span`
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

const Counter = styled(Text).attrs({ tag: "small" })`
    font-style: italic;
    color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([
    StyledInputContainer,
    Label,
    HelperBottomContainer,
    IconContainer,
    Counter,
])

export {
    StyledInputContainer,
    Label,
    HelperBottomContainer,
    IconContainer,
    Counter,
}
