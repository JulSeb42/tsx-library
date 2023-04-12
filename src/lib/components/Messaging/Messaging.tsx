/*=============================================== Messaging component ===============================================*/

import React, { forwardRef, useRef, useEffect, useState } from "react"
import type { ForwardedRef, ChangeEvent, FormEvent } from "react"

import { Flexbox, Text, uuid, Hr, Icon, useKeyPress } from "../.."
import { SendIcon, ChevronDownIcon } from "../../icons"

import * as Styles from "./styles"
import type { MessagingProps, MessageProps } from "./types"

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
            gap = "xxs",
            ...rest
        }: MessageProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Flexbox
            as={as}
            ref={ref}
            alignItems={type === "sent" ? "flex-end" : "flex-start"}
            flexDirection="column"
            gap={gap}
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
                {content ? content : ""}
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
            submit,
            borderColor = "gray-200",
            textDateTime,
            backgroundColorSent,
            backgroundColorReceived,
            textColorSent,
            textColorReceived,
            linkColorSent,
            linkColorReceived,
            dateTimeColor,
            iconScroll = <ChevronDownIcon size={32 * 0.6} />,
            messageGap,
            listGap = "s",
            ...rest
        }: MessagingProps,
        ref?: ForwardedRef<HTMLFormElement>
    ) => {
        const containerRef = useRef<HTMLDivElement>(null)
        const bottomRef = useRef<HTMLDivElement>(null)

        const [isButtonVisible, setIsButtonVisible] = useState(false)

        const scrollToBottom = () => {
            if (containerRef && containerRef.current) {
                const scrollHeight = containerRef?.current?.scrollHeight
                const height = containerRef?.current?.clientHeight
                const maxScrollTop = scrollHeight - height

                containerRef.current.scrollTop =
                    maxScrollTop > 0 ? maxScrollTop : 0

                setIsButtonVisible(false)
            }
        }

        useEffect(() => {
            scrollToBottom()

            containerRef?.current?.addEventListener("scroll", () => {
                const scroll = containerRef.current?.scrollTop
                const height = containerRef?.current?.clientHeight

                if (scroll && height) {
                    if (scroll < height) {
                        setIsButtonVisible(true)
                    } else {
                        setIsButtonVisible(false)
                    }
                }
            })
        }, [data])

        const [inputHeight, setInputHeight] = useState(32)

        const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
            input.setMessage(e.target.value)
            setInputHeight(e.target.scrollHeight)

            if (!e.target.value.length) setInputHeight(32)
        }

        const [isFocused, setIsFocused] = useState(false)

        useKeyPress(() => {
            if (isFocused && input.message.length) {
                submit()
            }
        }, ["Enter"])

        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            submit()
        }

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
                <Styles.MessagesContainer $gap={listGap} ref={containerRef}>
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
                                  gap={messageGap}
                                  key={uuid()}
                              />
                          ))
                        : children
                        ? children
                        : emptyMessage()}

                    <Styles.Bottom ref={bottomRef} $gap={listGap} />
                </Styles.MessagesContainer>

                <Styles.ScrollButton
                    icon={iconScroll}
                    size={32}
                    variant="ghost"
                    onClick={() => scrollToBottom()}
                    $inputHeight={inputHeight}
                    $isVisible={isButtonVisible}
                />

                <Hr color={borderColor} />

                <Styles.InputContainer
                    onSubmit={handleSubmit}
                    ref={ref}
                    {...rest}
                >
                    <Styles.Input
                        value={input.message}
                        onChange={handleMessage}
                        placeholder={
                            input.placeholder || "Type your message..."
                        }
                        $height={inputHeight}
                        autoFocus={input.autoFocus}
                        onKeyPress={e => {
                            if (e.key === "Enter") e.preventDefault()
                            if (e.key === "Enter" && e.shiftKey) {
                                input.setMessage(`${input.message}\n`)
                                setInputHeight(inputHeight + 24)
                            }
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
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
