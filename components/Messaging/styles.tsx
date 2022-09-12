/*=============================================== Messaging styles ===============================================*/

import styled, { css } from "styled-components"
import ScrollToBottom from "react-scroll-to-bottom"

import { Radiuses, Spacers, FontSizes, LineHeights, FontFamilies, Breakpoints, Transitions } from "../../Variables"
import Mixins from "../../Mixins"
import Text from "../Text"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"
import { MessageTypesTypes } from "./types"

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
    })}
`

const MessagesContainer = styled(ScrollToBottom)<{ $isEmpty?: boolean }>`
    flex-grow: 1;
    overflow-y: scroll;
    width: 100%;
    ${Mixins.HideScrollbar};

    & > div {
        ${Mixins.HideScrollbar};
    }

    ${({ $isEmpty }) =>
        $isEmpty &&
        css`
            height: 40vh;

            & > div {
                ${Mixins.Flexbox({
                    $alignItems: "center",
                    $justifyContent: "center",
                })}
            }
        `}
`

const InputContainer = styled.form`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};
`

const minHeight = `${FontSizes.Body} * ${LineHeights.Regular} * 3`

const Input = styled.textarea<{
    $color?: AllColorsTypes
    $colorPlaceholder?: AllColorsTypes
}>`
    flex-grow: 1;
    padding: 0;
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    line-height: ${LineHeights.Regular};
    resize: none;
    border: none;
    color: ${({ theme }) => theme.AllColors};
    min-height: calc(${minHeight});
    background-color: transparent;

    &::placeholder {
        color: ${({ $colorPlaceholder, theme }) =>
            theme.AllColors({ $color: $colorPlaceholder })};
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
    $type?: MessageTypesTypes
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
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
])

export {
    StyledMessaging,
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
}
