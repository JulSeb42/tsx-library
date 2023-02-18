/*=============================================== Messaging component ===============================================*/

import React, { forwardRef } from "react"
import ReactLinkify from "react-linkify"

import { Flexbox, Text, uuid, Hr, Icon } from "../../"
import SendIcon from "../../icons/SendIcon"

import * as Styles from "./styles"
import { MessagingProps, MessageProps } from "./types"

export const Message = forwardRef(
    (
        {
            as,
            type,
            content,
            date,
            time,
            textDateTime = "at",
            backgroundColor,
            dateTimeColor = "gray",
            textColor,
            linkColor,
            ...rest
        }: MessageProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Flexbox
            as={as}
            ref={ref}
            alignItems={type === "sent" ? "flex-end" : "flex-start"}
            flexDirection="column"
            {...rest}
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
                        : "font"
                }
                $linkColor={
                    linkColor
                        ? linkColor
                        : type === "sent"
                        ? "background"
                        : "primary"
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
)

export const Messaging = forwardRef(
    (
        {
            as,
            children,
            data,
            emptyText = "No message yet.",
            button,
            input,
            onSubmit,
            borderColor = "gray-200",
            messagesGap = "xs",
            textDateTime,
            backgroundColorSent,
            backgroundColorReceived,
            textColorSent,
            textColorReceived,
            linkColorSent,
            linkColorReceived,
            dateTimeColor,
            ...rest
        }: MessagingProps,
        ref?: React.ForwardedRef<HTMLFormElement>
    ) => {
        const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            input.setMessage(e.target.value)

        const emptyMessage = () => (
            <Styles.EmptyContainer>
                <Text
                    color={
                        typeof emptyText === "object"
                            ? emptyText.color
                            : "currentColor"
                    }
                >
                    {typeof emptyText === "object" ? emptyText.text : emptyText}
                </Text>
            </Styles.EmptyContainer>
        )

        return (
            <Styles.StyledMessaging as={as} $borderColor={borderColor}>
                <Styles.MessagesContainer $gap={messagesGap}>
                    {data && data.length
                        ? data.map(message => (
                              <Message
                                  type={message.type}
                                  content={message.content}
                                  date={message.date}
                                  time={message.time}
                                  textDateTime={textDateTime}
                                  backgroundColor={
                                      message.type === "sent"
                                          ? backgroundColorSent
                                          : backgroundColorReceived
                                  }
                                  textColor={
                                      message.type === "sent"
                                          ? textColorSent
                                          : textColorReceived
                                  }
                                  linkColor={
                                      message.type === "sent"
                                          ? linkColorSent
                                          : linkColorReceived
                                  }
                                  dateTimeColor={dateTimeColor}
                                  key={uuid()}
                              />
                          ))
                        : children
                        ? children
                        : emptyMessage()}
                </Styles.MessagesContainer>

                <Hr color={borderColor} />

                <Styles.InputContainer onSubmit={onSubmit} ref={ref} {...rest}>
                    <Styles.Input
                        value={input.message}
                        onChange={handleMessage}
                        placeholder={
                            input.placeholder || "Type your message..."
                        }
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
