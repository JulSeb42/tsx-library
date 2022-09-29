/*=============================================== Messaging ===============================================*/

import React, { forwardRef } from "react"
import ReactLinkify from "react-linkify"

import Text from "../Text"
import Flexbox from "../Flexbox"
import Icon from "../Icon"
import SendIcon from "../../icons/SendIcon"
import Hr from "../Hr"

import * as Styles from "./styles"
import { MessageProps, MessagingProps } from "./types"

const Message = ({
    type,
    content,
    date,
    time,
    textDateTime = "at",
    backgroundColor,
    dateTimeColor = "gray",
    textColor,
    linkColor,
    ...props
}: MessageProps) => (
    <Flexbox
        alignItems={type === "sent" ? "flex-end" : "flex-start"}
        flexDirection="column"
        {...props}
    >
        <Styles.StyledMessage
            $type={type}
            $backgroundColor={
                backgroundColor
                    ? backgroundColor
                    : type === "received"
                    ? "gray-100"
                    : "primary"
            }
            $textColor={
                textColor
                    ? textColor
                    : type === "sent"
                    ? "background"
                    : "currentColor"
            }
            $linkColor={
                linkColor ? linkColor : type === "sent" ? "white" : "primary"
            }
        >
            <ReactLinkify>{content}</ReactLinkify>
        </Styles.StyledMessage>

        {(date || time) && (
            <Text tag="small" color={dateTimeColor}>
                {date && date}
                {date && time && ` ${textDateTime} `}
                {time && time}
            </Text>
        )}
    </Flexbox>
)

const Messaging = forwardRef(
    (
        {
            children,
            emptyText = "No message yet.",
            button,
            input,
            onSubmit,
            borderColor = "gray-200",
            messagesGap = "xs",
            ...props
        }: MessagingProps,
        ref?: React.ForwardedRef<HTMLTextAreaElement>
    ) => {
        const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            input.setMessage(e.target.value)

        return (
            <Styles.StyledMessaging $borderColor={borderColor}>
                <Styles.MessagesContainer
                    $isEmpty={!children}
                    $gap={messagesGap}
                >
                    {children ? (
                        children
                    ) : (
                        <Text
                            color={
                                typeof emptyText === "object"
                                    ? emptyText.color
                                    : "currentColor"
                            }
                        >
                            {typeof emptyText === "object"
                                ? emptyText.text
                                : emptyText}
                        </Text>
                    )}
                </Styles.MessagesContainer>

                <Hr color={borderColor} />

                <Styles.InputContainer onSubmit={onSubmit} {...props}>
                    <Styles.Input
                        value={input.message}
                        onChange={handleMessage}
                        placeholder={
                            input.placeholder || "Type your message..."
                        }
                        ref={ref}
                    />

                    <Styles.SendButton
                        $hasText={!!button?.text}
                        type="submit"
                        disabled={input.message === "" && true}
                        $color={button?.color || "primary"}
                    >
                        {button?.text ? (
                            button.text
                        ) : button?.icon ? (
                            <Icon src={button.icon} size={24} />
                        ) : (
                            <SendIcon size={24} />
                        )}
                    </Styles.SendButton>
                </Styles.InputContainer>
            </Styles.StyledMessaging>
        )
    }
)

export { Messaging, Message }
