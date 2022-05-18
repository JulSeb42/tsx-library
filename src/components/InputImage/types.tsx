// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLLabelElement> {
    width?: string | number
    height?: string | number
}

export interface props extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    helper?: string
    validation?: string
    src: string
    alt: string
    iconEmpty?: string
    iconHover?: string
    width?: string
    height?: string
    id: string
}
