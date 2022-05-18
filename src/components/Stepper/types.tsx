// Imports
import React from "react"

export interface textStyleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    to?: string
}

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    steps: {
        text: string
        to?: string
    }[]
    active: number
}
