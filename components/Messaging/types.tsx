/*=============================================== Messaging types ===============================================*/

import React from "react"

/*==================== List possibilities ====================*/

const message = {
    received: "received",
    sent: "sent",
} as const

export type MessageTypesTypes = keyof typeof message

/*==================== Component Types ====================*/

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "sent" | "received"
    content: string
    date?: string
    time?: string
    textDateTime?: string
}

interface BaseProps extends React.HTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode | React.ReactNode[]
    textEmpty?: string

    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void

    input: {
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
        value: string
        placeholder?: string
    }
}

interface Possible1 extends BaseProps {
    button?: {
        icon: string
        text?: never
    }
}

interface Possible2 extends BaseProps {
    button?: {
        icon?: never
        text?: string
    }
}

export type MessagingProps = Possible1 | Possible2
