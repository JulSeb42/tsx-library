/*=============================================== Messaging styles ===============================================*/

import styled from "styled-components"

import {
    Radiuses,
    Spacers,
    FontSizes,
    LineHeights,
    FontFamilies,
    Breakpoints,
    Transitions,
    Mixins,
    Linkify,
    ButtonIcon,
} from "../.."
import type {
    AllColorsTypes,
    ColorsHoverTypes,
    SpacersTypes,
} from "../../types"
import type { MessageTypeTypes } from "./types"

import { setDefaultTheme } from "../../utils"

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
    position: relative;
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

const MessagesContainer = styled.div<{
    $gap?: SpacersTypes
}>`
    overflow-y: scroll;
    scroll-behavior: smooth;
    flex-grow: 1;
    ${Mixins.HideScrollbar};
    position: relative;

    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $gap,
        })};
`

const InputContainer = styled.form`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};
`

const Input = styled.textarea<{ $height?: number }>`
    flex-grow: 1;
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    line-height: ${LineHeights.Regular};
    resize: none;
    border: none;
    color: ${({ theme }) => theme.Font};
    background-color: transparent;
    height: ${({ $height }) => $height}px;
    max-height: calc(24px * 3);
    padding: ${Spacers.XXS} ${Spacers.XS};
    outline: none;

    &::placeholder {
        color: ${({ theme }) => theme.Gray200};
    }

    &:focus {
        background-color: ${({ theme }) => theme.Primary50};
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

const StyledMessage = styled(Linkify)<{
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

const Bottom = styled.div<{
    $gap: SpacersTypes
}>`
    width: 100%;
    height: 0;
`

const ScrollButton = styled(ButtonIcon)<{
    $inputHeight: number
    $isVisible?: boolean
}>`
    position: absolute;
    bottom: calc(
        ${({ $inputHeight }) => $inputHeight}px + ${Spacers.XXS} + ${Spacers.S} +
            (${Spacers.XS} * 2)
    );
    right: ${Spacers.XXS};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`

setDefaultTheme([
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
    Bottom,
    ScrollButton,
])

export {
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
    Bottom,
    ScrollButton,
}
