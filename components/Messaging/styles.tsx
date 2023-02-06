/*=============================================== Messaging styles ===============================================*/

import styled from "styled-components"
import ScrollToBottom from "react-scroll-to-bottom"

import {
    Radiuses,
    Spacers,
    FontSizes,
    LineHeights,
    FontFamilies,
    Breakpoints,
    Transitions,
    Mixins,
    Text,
} from "../../"
import { AllColorsTypes, ColorsHoverTypes, SpacersTypes } from "../../types"
import { MessageTypeTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledMessaging = styled.div<{ $borderColor?: AllColorsTypes }>`
    border: 1px solid
        ${({ $borderColor, theme }) =>
            theme.AllColors({ $color: $borderColor })};
    border-radius: ${Radiuses.L};
    min-height: 400px;
    max-height: 60vh;
    padding: ${Spacers.S};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "xs",
    })};
`

const EmptyContainer = styled.div`
    width: 100%;
    height: 40vh;
    flex-grow: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const MessagesContainer = styled(ScrollToBottom)<{
    $gap?: SpacersTypes
}>`
    overflow-y: scroll;
    flex-grow: 1;
    ${Mixins.HideScrollbar};

    & > div {
        ${Mixins.HideScrollbar};
        ${({ $gap }) =>
            Mixins.Flexbox({
                $flexDirection: "column",
                $gap,
            })};
    }
`

const InputContainer = styled.form`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};
`

const minHeight = `${FontSizes.Body} * ${LineHeights.Regular} * 3`

const Input = styled.textarea`
    flex-grow: 1;
    padding: 0;
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    line-height: ${LineHeights.Regular};
    resize: none;
    border: none;
    color: ${({ theme }) => theme.Font};
    min-height: calc(${minHeight});
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.Gray200};
    }
`

const buttonSize = 32

const SendButton = styled.button<{
    $hasText?: boolean
    $color?: ColorsHoverTypes
}>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    padding: 0;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${Radiuses.Circle};
    border: none;
    background-color: transparent;
    transition: ${Transitions.Short};
    color: ${({ theme }) => theme.ColorsHoverDefault};

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            color: ${({ theme }) => theme.ColorsHoverHover};
            background-color: ${({ $hasText, theme }) =>
                !$hasText && theme.Gray50};
        }

        &:not(:disabled):active {
            color: ${({ theme }) => theme.ColorsHoverActive};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }
`

const StyledMessage = styled(Text)<{
    $type?: MessageTypeTypes
    $backgroundColor?: AllColorsTypes
    $textColor?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
}>`
    padding: ${Spacers.XS};
    border-radius: ${Radiuses.S};
    background-color: ${({ $backgroundColor, theme }) =>
        theme.AllColors({ $color: $backgroundColor })};
    width: fit-content;
    max-width: 70%;
    color: ${({ $textColor, theme }) =>
        theme.AllColors({ $color: $textColor })};

    & > * {
        color: ${({ theme, $textColor }) =>
            theme.AllColors({
                $color: $textColor,
            })};
    }

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

setDefaultTheme([
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
])

export {
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
}
