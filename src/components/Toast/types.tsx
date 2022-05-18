// Imports
import React from "react"
import { props as gridProps } from "../Grid/types"

export interface styleProps extends gridProps {
    radius?: string
    shadow?: string
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
}

export interface titleProps extends containerProps {
    
}
