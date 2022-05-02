// Packages
import React from "react"
import Linkify from "react-linkify"

// Components
import * as Font from "../Font"
import Icon from "../Icon"
import Hr from "../Hr"

// Types
import { emptyProps, messageProps, inputProps } from "./types"

// Styles
import {
    MessagesContainer,
    Empty,
    ListMessages,
    ContainerMessage,
    DateTime,
    Bubble,
    ContainerSend,
    Input,
    Send,
} from "./styles"

const EmptyContainer: React.FC<emptyProps> = ({ children, ...props }) => {
    return (
        <Empty {...props}>
            <Font.P>{children}</Font.P>
        </Empty>
    )
}

const Message: React.FC<messageProps> = ({
    type,
    children,
    date,
    time,
    ...props
}) => {
    return (
        <ContainerMessage type={type} {...props}>
            <Bubble type={type}>
                <Linkify>{children}</Linkify>
            </Bubble>

            {(date || time) && (
                <DateTime>
                    {date}
                    {date && time && " at "}
                    {time}
                </DateTime>
            )}
        </ContainerMessage>
    )
}

const MessageInput: React.FC<inputProps> = ({
    onSubmit,
    textButton,
    icon,
    ...props
}) => {
    return (
        <>
            <Hr />

            <ContainerSend onSubmit={onSubmit}>
                <Input {...props} />

                <Send
                    textButton={textButton}
                    aria-label="Send message"
                    type="submit"
                >
                    {textButton ? (
                        textButton
                    ) : icon ? (
                        <Icon src={icon} size={16} />
                    ) : (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.284 7.39666L2.95067 2.06333C2.83656 2.00934 2.70946 1.98889 2.58417 2.00437C2.45888 2.01985 2.34058 2.07062 2.24304 2.15076C2.1455 2.2309 2.07275 2.33711 2.03326 2.45702C1.99377 2.57692 1.98918 2.70558 2.02 2.82799L3.31267 7.99999L2.02 13.172C1.98889 13.2945 1.99328 13.4232 2.03268 13.5433C2.07208 13.6634 2.14484 13.7697 2.24247 13.8499C2.3401 13.9301 2.45854 13.9809 2.58396 13.9962C2.70938 14.0116 2.83657 13.9909 2.95067 13.9367L14.284 8.60333C14.3985 8.54949 14.4954 8.46416 14.5632 8.35732C14.631 8.25049 14.6671 8.12655 14.6671 7.99999C14.6671 7.87344 14.631 7.7495 14.5632 7.64266C14.4954 7.53582 14.3985 7.4505 14.284 7.39666V7.39666ZM3.654 12.1313L4.21334 9.89333L8 7.99999L4.21334 6.10666L3.654 3.86866L12.434 7.99999L3.654 12.1313Z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </Send>
            </ContainerSend>
        </>
    )
}

export {
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
}
