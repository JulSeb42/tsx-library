// Packages
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Linkify from "react-linkify"
import ScrollToBottom from "react-scroll-to-bottom"

// Components
import * as Font from "./Font"
import Variables from "./Variables"
import Icon from "./Icon"
import Hr from "./Hr"
// import ScrollToBottom from "./ScrollToBottom"

// Types
interface styleContainerMessagesProps
    extends React.HTMLAttributes<HTMLDivElement> {
    type?: string
}

interface styleBubbleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    type?: string
}

interface styleSendProps extends React.HTMLAttributes<HTMLButtonElement> {
    textButton?: string | boolean
}

interface emptyProps extends React.HTMLAttributes<HTMLDivElement> {

}

interface messageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    type?: string
    time?: string
    date?: string
}

interface inputProps extends React.HTMLAttributes<HTMLElement> {
    textButton?: string
    icon?: string
}

// Styles
const MessagesContainer = styled.div`
    width: 100%;
    height: 65vh;
    border: 1px solid ${Variables.Colors.Gray100};
    padding: ${Variables.Spacers.M};
    display: flex;
    flex-direction: column;
    border-radius: ${Variables.Radiuses.M};

    hr {
        margin: ${Variables.Spacers.S} 0;
    }
`

const Empty = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ListMessages = styled(ScrollToBottom)`
    flex-grow: 1;
    display: grid;
    margin-bottom: ${Variables.Spacers.S};
    overflow-y: scroll;

    & > div {
        display: grid;
        grid-template-columns: 1fr;
        gap: ${Variables.Spacers.S};
        align-content: start;
    }
`

const ContainerMessage = styled.div<styleContainerMessagesProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props =>
        props.type === "sent" ? "flex-end" : "flex-start"};
`

const DateTime = styled(Font.Small)`
    color: ${Variables.Colors.Gray500};
    margin-top: ${Variables.Spacers.XXS};
`

const Bubble = styled(Font.P)<styleBubbleProps>`
    width: auto;
    display: inline;
    max-width: 70%;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
    border-radius: ${Variables.Radiuses.S};

    a {
        text-decoration: underline;
        font-weight: ${Variables.FontWeights.Regular};
    }

    ${props =>
        props.type === "sent" &&
        css`
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};

            a {
                color: ${Variables.Colors.White};

                &:hover {
                    color: ${Variables.Colors.Gray100};
                }
            }
        `}

    ${props =>
        props.type === "received" &&
        css`
            background-color: ${Variables.Colors.Gray100};
            color: ${Variables.Colors.Black};
        `}
`

const ContainerSend = styled.form`
    height: 10%;
    display: flex;
    align-items: center;
    min-height: 50px;
`

const Input = styled.textarea`
    padding: 0;
    border: none;
    resize: none;
    flex-grow: 1;
    height: 100%;
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    margin-right: ${Variables.Spacers.XS};
`

const Send = styled.button<styleSendProps>`
    color: ${Variables.Colors.Primary500};
    border: none;
    padding: 0;
    background: none;
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    ${props =>
        props.textButton &&
        css`
            font-weight: ${Variables.FontWeights.Bold};
            font-size: ${Variables.FontSizes.Body};
        `}

    ${props =>
        !props.textButton &&
        css`
            --size: 32px;
            width: var(--size);
            height: var(--size);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &:hover {
                background-color: ${Variables.Colors.Gray50};
            }
        `}
`

const EmptyContainer: React.FC<emptyProps> = props => {
    return (
        <Empty {...props}>
            <Font.P>{props.children}</Font.P>
        </Empty>
    )
}

const Message: React.FC<messageProps> = props => {
    return (
        <ContainerMessage type={props.type} {...props}>
            <Bubble type={props.type}>
                <Linkify>{props.children}</Linkify>
            </Bubble>

            {(props.date || props.time) && (
                <DateTime>
                    {props.date}
                    {props.date && props.time && " at "}
                    {props.time}
                </DateTime>
            )}
        </ContainerMessage>
    )
}

const MessageInput: React.FC<inputProps> = props => {
    return (
        <>
            <Hr />

            <ContainerSend onSubmit={props.onSubmit}>
                <Input {...props} />

                <Send
                    textButton={props.textButton}
                    aria-label="Send message"
                    type="submit"
                >
                    {props.textButton ? (
                        props.textButton
                    ) : props.icon ? (
                        <Icon name={props.icon} size={16} />
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
