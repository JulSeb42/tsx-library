// Imports
import styled, { css } from "styled-components"
import ScrollToBottom from "react-scroll-to-bottom"

import Variables from "../Variables"
import * as Mixins from "../Mixins"
import * as Font from "../Font"

import { styleMessageProps, styleSendProps } from "./types"

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
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })};
`

const ListMessages = styled(ScrollToBottom)`
    flex-grow: 1;
    ${Mixins.Grid};
    margin-bottom: ${Variables.Spacers.S};
    overflow-y: scroll;

    & > div {
        ${Mixins.Grid({
            gap: "s",
            alignContent: "start",
        })};
    }
`

const ContainerMessage = styled.div<styleMessageProps>`
    ${({ type }) =>
        Mixins.Flexbox({
            direction: "column",
            alignItems: type === "sent" ? "flex-end" : "flex-start",
        })}
`

const DateTime = styled(Font.Small)`
    color: ${Variables.Colors.Gray500};
    margin-top: ${Variables.Spacers.XXS};
`

const Bubble = styled(Font.P)<styleMessageProps>`
    width: auto;
    display: inline;
    max-width: 70%;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
    border-radius: ${Variables.Radiuses.S};
    color: ${({ type }) => type === "sent" && Variables.Colors.White};
    background-color: ${({ type }) =>
        type === "sent"
            ? Variables.Colors.Primary500
            : Variables.Colors.Gray100};

    a {
        text-decoration: underline;
        font-weight: ${Variables.FontWeights.Regular};
        color: ${({ type }) =>
            type === "sent"
                ? Variables.Colors.White
                : Variables.Colors.Primary500};

        &:hover {
            color: ${({ type }) =>
                type === "sent"
                    ? Variables.Colors.Gray300
                    : Variables.Colors.Primary300};
        }

        &:active {
            color: ${({ type }) =>
                type === "sent"
                    ? Variables.Colors.Gray100
                    : Variables.Colors.Primary600};
        }
    }
`

const ContainerSend = styled.form`
    height: 10%;
    ${Mixins.Flexbox({
        alignItems: "center",
    })};
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
            ${Mixins.Flexbox({
                alignItems: "center",
                justifyContent: "center",
            })};
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
