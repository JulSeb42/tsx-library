/*=============================================== Messaging types ===============================================*/

import React from "react"

import {
    MessageProps as MessageType,
    AllColorsTypes,
    ColorsHoverTypes,
    SpacersTypes,
} from "../../types"

enum messageType {
    sent,
    received,
}

export type MessageTypeTypes = keyof typeof messageType

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement>, MessageType {
    as?: React.ElementType
    textDateTime?: string
    backgroundColor?: AllColorsTypes
    textColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    dateTimeColor?: AllColorsTypes
}

interface MessagingPropsBase extends React.HTMLAttributes<HTMLFormElement> {
    as?: React.ElementType
    borderColor?: AllColorsTypes
    emptyText?:
        | string
        | {
              text?: string
              color?: AllColorsTypes
          }
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
    input: {
        message: string
        setMessage: (message: string) => void
        placeholder?: string
    }
    messagesGap?: SpacersTypes
}

interface MessagingPropsButton1 extends MessagingPropsBase {
    button?: {
        color?: ColorsHoverTypes
        icon?: string
        text?: never
    }
}

interface MessagingPropsButton2 extends MessagingPropsBase {
    button?: {
        color?: ColorsHoverTypes
        icon?: never
        text?: string
    }
}

type MessagingPropsButton = MessagingPropsButton1 | MessagingPropsButton2

type MessagingPropsData1 = MessagingPropsButton & {
    children?: React.ReactNode[]
    data?: never
    textDateTime?: never
    backgroundColorSent?: never
    backgroundColorReceived?: never
    textColorSent?: never
    textColorReceived?: never
    linkColorSent?: never
    linkColorReceived?: never
    dateTimeColor?: never
}

type MessagingPropsData2 = MessagingPropsButton & {
    children?: never
    data?: MessageType[]
    textDateTime?: string
    backgroundColorSent?: AllColorsTypes
    backgroundColorReceived?: AllColorsTypes
    textColorSent?: AllColorsTypes
    textColorReceived?: AllColorsTypes
    linkColorSent?: ColorsHoverTypes
    linkColorReceived?: ColorsHoverTypes
    dateTimeColor?: AllColorsTypes
}

export type MessagingProps = MessagingPropsData1 | MessagingPropsData2
