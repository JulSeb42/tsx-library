// Imports
import React from "react"

import { props as gridProps } from "../Grid/types"

export interface containerProps extends gridProps {
    accordionStyle?: "basic" | "rounded"
    borderColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "black"
        | "gray"
        | string
    backgroundColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "black"
        | "gray"
        | string
    titleColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "black"
        | "gray"
        | string
    iconColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "black"
        | "gray"
        | string
}

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: "plus" | "chevron"
}

export interface itemProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean
    icon?: "plus" | "chevron"
    title?: string
}

export interface contentProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    isOpen?: boolean
}
