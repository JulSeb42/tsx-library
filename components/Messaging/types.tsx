/*=============================================== Messaging types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const message = {
    received: "received",
    sent: "sent",
} as const

export type MessageTypesTypes = keyof typeof message

/*==================== Component Types ====================*/

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    type: MessageTypesTypes
    content: string
    date?: string
    time?: string
    textDateTime?: string
    backgroundColor?: AllColorsTypes
    textColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    dateTimeColor?: AllColorsTypes
}

interface BaseProps extends React.HTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode | React.ReactNode[]

    borderColor?: AllColorsTypes

    emptyText?:
        | string
        | {
              text: string
              color?: AllColorsTypes
          }

    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void

    input: {
        message: string
        setMessage: (message: string) => void
        placeholder?: string
        textColor?: AllColorsTypes
        placeholderColor?: AllColorsTypes
    }
}

interface Possible1 extends BaseProps {
    button?: {
        color?: ColorsHoverTypes
        icon?: string
        text?: never
    }
}

interface Possible2 extends BaseProps {
    button?: {
        color?: ColorsHoverTypes
        icon?: never
        text?: string
    }
}

export type MessagingProps = Possible1 | Possible2
