// Packages
import React from "react"

// Types
export interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType | keyof JSX.IntrinsicElements
    size?: number
    btnStyle?: string
    color?: string
    colorHover?: string
    colorActive?: string
    hoverBackground?: boolean
}

export interface props extends styleProps {
    to?: string
    icon: string
}
