// Imports
import React from "react"
import { props as gridProps } from "../Grid/types"

export interface styleProps extends gridProps {
    radius?: string | number
    shadow?: string
    isOpen?: boolean
}

export interface containerProps extends styleProps {
    close?: (e: React.MouseEvent<HTMLElement>) => void
    icon?: string
    iconColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
    customIconClose?: string
    title?: string
}

export interface titleProps extends containerProps {
    
}
