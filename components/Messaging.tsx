/*=============================================== Messaging ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import ReactLinkify from "react-linkify"
import ScrollToBottom from "react-scroll-to-bottom"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import Text from "./Text"
import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Icon from "./Icon"
import SendIcon from "../icons/SendIcon"
import Hr from "./Hr"

import { MessageProps } from "./component-props"

/*==================== Component ====================*/

const Messaging = ({
    children,
    texts,
    button,
    input,
    onSubmit,
    messages,
    ...props
}: Props) => (
    <StyledMessaging>
        <MessagesContainer $isEmpty={!messages}>
            {messages ? (
                messages.map(message => (
                    <Flexbox
                        alignItems={message.type === "sent" ? "flex-end" : "flex-start"}
                        flexDirection="column"
                        key={uuid()}
                    >
                        <StyledMessage $type={message.type}>
                            <ReactLinkify>{message.text}</ReactLinkify>
                        </StyledMessage>

                        {(message.date || message.time) && (
                            <Text tag="small" color="gray">
                                {message.date && message.date}
                                {message.date && message.time && ` ${texts?.dateTimeAt || "at"} `}
                                {message.time && message.time}
                            </Text>
                        )}
                    </Flexbox>
                ))
            ) : (
                <Text>{texts?.emptyMessages || "No message yet."}</Text>
            )}
        </MessagesContainer>

        <Hr />

        <InputContainer onSubmit={onSubmit} {...props}>
            <Input onChange={input.onChange} value={input.value} placeholder={input.placeholder || "Type your message"} />

            <SendButton $hasText={!!button?.text} type="submit">
                {button?.text ? (
                    button.text
                ) : button?.icon ? (
                    <Icon src={button.icon} size={24} />
                ) : (
                    <SendIcon size={24} />
                )}
            </SendButton>
        </InputContainer>
    </StyledMessaging>
)

export default Messaging

/*==================== Types ====================*/

const message = {
    received: "received",
    sent: "sent",
} as const

type MessageTypesTypes = keyof typeof message

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isEmpty?: boolean
}

interface BaseProps extends React.HTMLAttributes<HTMLFormElement> {
    messages?: MessageProps[]

    texts?: {
        emptyMessages?: string
        dateTimeAt?: string
    }

    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void

    input: {
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
        value: string
        placeholder?: string
    }
}

interface Possible1 extends BaseProps {
    button?: {
        icon: string
        text?: never
    }
}

interface Possible2 extends BaseProps {
    button?: {
        icon?: never
        text?: string
    }
}

type Props = Possible1 | Possible2

interface StyleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    $hasText?: boolean
}

interface StyleMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    $type?: MessageTypesTypes
}

/*==================== Styles ====================*/

const StyledMessaging = styled.div`
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
    })};
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

const StyledMessage = styled(Text)<StyleMessageProps>`
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
