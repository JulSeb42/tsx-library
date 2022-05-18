// Imports
import React from "react"

export interface styleMessageProps
    extends React.HTMLAttributes<HTMLDivElement>,
        React.HTMLAttributes<HTMLParagraphElement> {
    type: "sent" | "received"
}

export interface styleSendProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    textButton?: string | boolean
}

export interface messageProps extends styleMessageProps {
    time?: string
    date?: string
}

export interface inputProps extends React.HTMLAttributes<HTMLElement> {
    textButton?: string
    icon?: string
}
