/*=============================================== Messaging ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import ReactLinkify from "react-linkify"
import ScrollToBottom from "react-scroll-to-bottom"
import { convertDateShort } from "js-utils-julseb"

import Variables from "./Variables"
import { P, Small } from "./Font"
import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Icon from "./Icon"
import SendIcon from "../icons/SendIcon"
import Hr from "./Hr"

import { MessageProps } from "./component-props"

/*==================== Component ====================*/

const Messaging = ({
    children,
    emptyMessage = "No message yet.",
    iconSend,
    textButton,
    onChangeInput,
    valueInput,
    onSubmit,
    placeholderInput = "Type your message",
    ...props
}: Props) => (
    <Container>
        <MessagesContainer $isEmpty={!children}>{children ? children : <P>{emptyMessage}</P>}</MessagesContainer>

        <Hr />

        <InputContainer onSubmit={onSubmit} {...props}>
            <Input onChange={onChangeInput} value={valueInput} placeholder={placeholderInput} />

            <SendButton $hasText={!!textButton} type="submit">
                {textButton ? (
                    textButton
                ) : iconSend ? (
                    <Icon src={iconSend} size={24} />
                ) : (
                    <SendIcon size={24} />
                )}
            </SendButton>
        </InputContainer>
    </Container>
)

const Message = ({ message }: MessageItemProps) => {
    const { type, text, date, time } = message

    return (
        <Flexbox alignItems={type === "sent" ? "flex-end" : "flex-start"} flexDirection="column">
            <StyledMessage $type={type}>
                <ReactLinkify>{text}</ReactLinkify>
            </StyledMessage>

            {(date || time) && (
                <Small color="gray">
                    {date && convertDateShort(date)}
                    {date && time && " at "}
                    {time && time}
                </Small>
            )}
        </Flexbox>
    )
}

export { Messaging, Message }

/*==================== Types ====================*/

const message = {
    received: "received",
    sent: "sent",
} as const

type MessageTypesTypes = keyof typeof message

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isEmpty?: boolean
}

interface Props extends React.HTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode[] | React.ReactNode
    emptyMessage?: string
    iconSend?: string
    textButton?: string
    onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    valueInput: string
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
    placeholderInput?: string
}

interface StyleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    $hasText?: boolean
}

interface StyleMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    $type?: MessageTypesTypes
}

interface MessageItemProps extends React.HTMLAttributes<HTMLParagraphElement> {
    message: MessageProps
}

/*==================== Styles ====================*/

const Container = styled.div`
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.L};
    max-height: 60vh;
    padding: ${Variables.Spacers.S};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "xs",
    })}
`

const MessagesContainer = styled(ScrollToBottom)<StyleProps>`
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
    })}
`

const Input = styled.textarea`
    flex-grow: 1;
    padding: 0;
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    line-height: ${Variables.LineHeights.Regular};
    resize: none;
    border: none;
    color: ${Variables.Colors.Black};
    min-height: calc(${Variables.FontSizes.Body} * ${Variables.LineHeights.Regular} * 3);

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }
`

const buttonSize = 32

const SendButton = styled.button<StyleButtonProps>`
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
                      &:hover {
                          color: ${Variables.Colors.Primary300};
                      }

                      &:active {
                          color: ${Variables.Colors.Primary600};
                      }
                  `
                : css`
                      &:hover {
                          color: ${Variables.Colors.Primary300};
                          background-color: ${Variables.Colors.Gray50};
                      }

                      &:active {
                          color: ${Variables.Colors.Primary600};
                      }
                  `}
    }
`

const StyledMessage = styled(P)<StyleMessageProps>`
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.S};
    background-color: ${({ $type }) => ($type === "received" ? Variables.Colors.Gray100 : Variables.Colors.Primary500)};
    width: 70%;
    max-width: 400px;
    color: ${({ $type }) => $type === "sent" && Variables.Colors.White};

    a {
        color: ${({ $type }) => $type === "sent" && Variables.Colors.White};

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${({ $type }) => $type === "sent" && Variables.Colors.Gray300};
            }

            &:active {
                color: ${({ $type }) => $type === "sent" && Variables.Colors.Gray100};
            }
        }
    }
`
