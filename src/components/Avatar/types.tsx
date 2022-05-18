// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number
    background?: string
}

export interface props extends styleProps {
    children?: string
    src?: string
    alt?: string
    icon?: string
}
