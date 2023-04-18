/*=============================================== Toast styles ===============================================*/

import styled from "styled-components"

import { ButtonIcon, Mixins, Radiuses, Shadows, Spacers, Text } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledToast = styled.div`
    width: 100%;
    max-width: var(--toast-max-width);
    background-color: ${({ theme }) => theme.Background};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "xxs",
    })};
    box-shadow: ${Shadows.S};
    border-radius: ${Radiuses.M};
    padding: ${Spacers.S};

    &.closed {
        display: none;
    }
`

const Title = styled(Text).attrs({ tag: "h5" })``

const TitleContainer = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "flex-start",
        $justifyContent: "flex-start",
        $gap: "xs",
    })};

    ${Title} {
        flex-grow: 1;
    }
`

const IconContainer = styled.span`
    height: 32px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
`

const Content = styled.div`
    ${Mixins.Flexbox({
        $gap: "xs",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
`

const CloseButton = styled(ButtonIcon).attrs({
    size: 32,
    variant: "transparent",
})`
    min-width: 32px;
`

setDefaultTheme([
    StyledToast,
    TitleContainer,
    Content,
    CloseButton,
    Title,
    IconContainer,
])

export {
    StyledToast,
    TitleContainer,
    Content,
    CloseButton,
    Title,
    IconContainer,
}
