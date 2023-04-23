/*=============================================== Messaging component ===============================================*/

import React, { forwardRef, useRef, useEffect, useState } from "react"
import type { ForwardedRef, ChangeEvent, FormEvent } from "react"
import classNames from "classnames"

import {
    Flexbox,
    Text,
    uuid,
    Hr,
    useKeyPress,
    Button,
    ButtonIcon,
    stringifyPx,
} from "../.."
import { SendIcon, ChevronDownIcon } from "../../icons"

import {
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    StyledMessage,
    Bottom,
    ScrollButton,
    DateTime,
} from "./styles"
import type { MessagingProps, MessageProps } from "./types"

export const Message = forwardRef(
    (
        {
            as,
            type,
            text,
            date,
            time,
            textDateTime = "at",
            className,
            ...rest
        }: MessageProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Flexbox
                as={as}
                ref={ref}
                alignItems={type === "sent" ? "flex-end" : "flex-start"}
                flexDirection="column"
                gap="xxs"
                className={classNames("message-container", className)}
                {...rest}
            >
                <StyledMessage
                    data-message-type={type}
                    className="message-text"
                >
                    {text}
                </StyledMessage>

                {(date || time) && (
                    <DateTime className="date-time">
                        {date && date}
                        {date && time && ` ${textDateTime} `}
                        {time && time}
                    </DateTime>
                )}
            </Flexbox>
        )
    }
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
            textDateTime,
            iconScroll = <ChevronDownIcon size={32 * 0.6} />,
            className,
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
            <EmptyContainer>
                <Text>{emptyText}</Text>
            </EmptyContainer>
        )

        return (
            <StyledMessaging as={as} className={className}>
                <MessagesContainer
                    ref={containerRef}
                    className="messages-container"
                >
                    {data && data.length
                        ? data.map(message => (
                              <Message
                                  type={message.type}
                                  text={message.text}
                                  date={message.date}
                                  time={message.time}
                                  textDateTime={textDateTime}
                                  key={uuid()}
                              />
                          ))
                        : children
                        ? children
                        : emptyMessage()}

                    <Bottom ref={bottomRef} className="messages-bottom" />
                </MessagesContainer>

                <ScrollButton
                    icon={iconScroll}
                    size={32}
                    variant="ghost"
                    onClick={() => scrollToBottom()}
                    className={classNames(
                        { visible: isButtonVisible },
                        "scroll-button"
                    )}
                    style={{
                        ["--input-height" as any]: stringifyPx(inputHeight),
                    }}
                />

                <Hr />

                <InputContainer
                    onSubmit={handleSubmit}
                    ref={ref}
                    className="message-form"
                    {...rest}
                >
                    <Input
                        value={input.message}
                        onChange={handleMessage}
                        placeholder={
                            input.placeholder || "Type your message..."
                        }
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
                        style={{
                            ["--input-height" as any]: stringifyPx(inputHeight),
                        }}
                        className="message-input"
                    />

                    {button?.text ? (
                        <Button
                            type="submit"
                            disabled={input.message === ""}
                            color="primary"
                            variant="transparent"
                            noPadding
                            className="message-button"
                        >
                            {button?.text}
                        </Button>
                    ) : (
                        <ButtonIcon
                            icon={button?.icon || <SendIcon size={24} />}
                            disabled={input.message === ""}
                            color="primary"
                            variant="transparent"
                            size={32}
                            className="message-button"
                        />
                    )}
                </InputContainer>
            </StyledMessaging>
        )
    }
)
