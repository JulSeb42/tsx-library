// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    noPadding?: boolean
    btnStyle?: "plain" | "text" | "outline"
    color?: string
    colorHover?: string
    colorActive?: string
    justify?: "start" | "center" | "end" | "stretch"
    to?: string
    textColor?: string
}

export interface props extends styleProps {
    loading?: boolean
    iconLeft?: string
    iconRight?: string
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}
