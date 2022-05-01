// Packages
import React from "react"

// Types
export interface styleProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    as?: React.ElementType | keyof JSX.IntrinsicElements
    noPadding?: boolean
    btnStyle?: string
    color?: string
    colorHover?: string
    colorActive?: string
    justify?: string
}

export interface props extends styleProps {
    loading?: boolean
    iconLeft?: string
    iconRight?: string
    to?: string
    disabled?: boolean
}
