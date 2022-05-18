// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number
    color?: string
    textColor?: string
}

export interface props extends styleProps {
    icon?: string
}
