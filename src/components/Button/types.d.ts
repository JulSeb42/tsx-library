// Packages
import React from "react"

// Types
export interface styleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    as?: React.ElementType | keyof JSX.IntrinsicElements
    noPadding?: boolean
    btnStyle?: "plain" | "text" | "outline"
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | string
    colorHover?: string
    colorActive?: string
    justify?: "start" | "center" | "end" | "stretch"
    to?: string
}

export interface props extends styleProps {
    loading?: boolean
    iconLeft?: string
    iconRight?: string
    to?: string
    disabled?: boolean
}
