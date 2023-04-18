/*=============================================== Messaging types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"

import type { MessageProps as MessageType } from "../../types"

const messageType = { sent: "sent", received: "received" } as const

export type MessageTypeTypes = keyof typeof messageType

export interface MessageProps
    extends HTMLAttributes<HTMLDivElement>,
        MessageType {
    as?: ElementType
    textDateTime?: string
}

interface MessagingPropsBase extends HTMLAttributes<HTMLFormElement> {
    as?: ElementType
    emptyText?: string
    submit: () => void
    input: {
        message: string
        setMessage: (message: string) => void
        placeholder?: string
        autoFocus?: boolean
    }
    iconScroll?: string | JSX.Element
}

interface MessagingPropsButton1 extends MessagingPropsBase {
    button?: {
        icon?: string
        text?: never
    }
}

interface MessagingPropsButton2 extends MessagingPropsBase {
    button?: {
        icon?: never
        text?: string
    }
}

type MessagingPropsButton = MessagingPropsButton1 | MessagingPropsButton2

type MessagingPropsData1 = MessagingPropsButton & {
    children?: ReactNode[]
    data?: never
    textDateTime?: never
}

type MessagingPropsData2 = MessagingPropsButton & {
    children?: never
    data?: MessageType[]
    textDateTime?: string
}

export type MessagingProps = MessagingPropsData1 | MessagingPropsData2
