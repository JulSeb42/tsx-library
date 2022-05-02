// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleContainerMessagesProps
    extends HTMLAttributes<HTMLDivElement> {
    type?: string
}

export interface styleBubbleProps extends HTMLAttributes<HTMLParagraphElement> {
    type?: string
}

export interface styleSendProps extends HTMLAttributes<HTMLButtonElement> {
    textButton?: string | boolean
}

export interface emptyProps extends HTMLAttributes<HTMLDivElement> {}

export interface messageProps extends HTMLAttributes<HTMLParagraphElement> {
    type?: string
    time?: string
    date?: string
}

export interface inputProps extends HTMLAttributes<HTMLElement> {
    textButton?: string
    icon?: string
}
