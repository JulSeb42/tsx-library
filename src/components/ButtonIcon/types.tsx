// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    size?: number
    btnStyle?: "plain" | "transparent"
    color?: string
    colorHover?: string
    colorActive?: string
    hoverBackground?: boolean
}

export interface props extends styleProps {
    to?: string
    icon: string
    disabled?: boolean
}
