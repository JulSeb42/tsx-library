/*=============================================== Messaging ===============================================*/

import React from "react"
import ReactLinkify from "react-linkify"

import Text from "../Text"
import Flexbox from "../Flexbox"
import Icon from "../Icon"
import SendIcon from "../../icons/SendIcon"
import Hr from "../Hr"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { MessageProps, MessagingProps } from "./types"

const Message = ({
    type,
    content,
    date,
    time,
    textDateTime = "at",
}: MessageProps) => (
    <Flexbox
        alignItems={type === "sent" ? "flex-end" : "flex-start"}
        flexDirection="column"
        key={uuid()}
    >
        <Styles.StyledMessage $type={type}>
            <ReactLinkify>{content}</ReactLinkify>
        </Styles.StyledMessage>

        {(date || time) && (
            <Text tag="small" color="gray">
                {date && date}
                {date && time && ` ${textDateTime} `}
                {time && time}
            </Text>
        )}
    </Flexbox>
)

const Messaging = ({
    children,
    textEmpty = "No message yet.",
    button,
    input,
    onSubmit,
    ...props
}: MessagingProps) => (
    <Styles.StyledMessaging>
        <Styles.MessagesContainer $isEmpty={!children}>
            {children ? children : <Text>{textEmpty}</Text>}
        </Styles.MessagesContainer>

        <Hr />

        <Styles.InputContainer onSubmit={onSubmit} {...props}>
            <Styles.Input
                onChange={input.onChange}
                value={input.value}
                placeholder={input.placeholder || "Type your message"}
            />

            <Styles.SendButton
                $hasText={!!button?.text}
                type="submit"
                disabled={input.value === "" && true}
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

export { Messaging, Message }
