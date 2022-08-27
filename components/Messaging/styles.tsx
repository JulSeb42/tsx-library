/*=============================================== Messaging styles ===============================================*/

import styled, { css } from "styled-components"
import ScrollToBottom from "react-scroll-to-bottom"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Text from "../Text"

import { MessageTypesTypes } from "./types"

const StyledMessaging = styled.div`
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.L};
    min-height: 400px;
    max-height: 60vh;
    padding: ${Variables.Spacers.S};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "xs",
    })}
`

const MessagesContainer = styled(ScrollToBottom)<{ $isEmpty?: boolean }>`
    flex-grow: 1;
    overflow-y: scroll;
    width: 100%;

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

const minHeight = `${Variables.FontSizes.Body} * ${Variables.LineHeights.Regular} * 3`

const Input = styled.textarea`
    flex-grow: 1;
    padding: 0;
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    line-height: ${Variables.LineHeights.Regular};
    resize: none;
    border: none;
    color: ${Variables.Colors.Black};
    min-height: calc(${minHeight});

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }
`

const buttonSize = 32

const SendButton = styled.button<{ $hasText?: boolean }>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    padding: 0;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    background-color: transparent;
    transition: ${Variables.Transitions.Short};
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Hover} {
        ${({ $hasText }) =>
            $hasText
                ? css`
                      &:not(:disabled):hover {
                          color: ${Variables.Colors.Primary300};
                      }

                      &:not(:disabled):active {
                          color: ${Variables.Colors.Primary600};
                      }
                  `
                : css`
                      &:not(:disabled):hover {
                          color: ${Variables.Colors.Primary300};
                          background-color: ${Variables.Colors.Gray50};
                      }

                      &:not(:disabled):active {
                          color: ${Variables.Colors.Primary600};
                      }
                  `}
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`

const StyledMessage = styled(Text)<{ $type?: MessageTypesTypes }>`
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.S};
    background-color: ${({ $type }) =>
        $type === "received"
            ? Variables.Colors.Gray100
            : Variables.Colors.Primary500};
    width: fit-content;
    max-width: 70%;
    color: ${({ $type }) => $type === "sent" && Variables.Colors.White};

    a {
        color: ${({ $type }) => $type === "sent" && Variables.Colors.White};

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${({ $type }) =>
                    $type === "sent" && Variables.Colors.Gray300};
            }

            &:active {
                color: ${({ $type }) =>
                    $type === "sent" && Variables.Colors.Gray100};
            }
        }
    }
`

export {
    StyledMessaging,
    MessagesContainer,
    InputContainer,
    Input,
    SendButton,
    StyledMessage,
}
