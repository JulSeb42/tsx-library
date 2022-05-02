// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import ScrollToBottom from "react-scroll-to-bottom"

// Components
import * as Font from "../Font"
import Variables from "../Variables"

// Types
import {
    styleContainerMessagesProps,
    styleBubbleProps,
    styleSendProps,
} from "./types"

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

export {
    MessagesContainer,
    Empty,
    ListMessages,
    ContainerMessage,
    DateTime,
    Bubble,
    ContainerSend,
    Input,
    Send,
}
