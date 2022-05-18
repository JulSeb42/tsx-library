// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number
    border?: number
    background?: string
    color?: string
    marginLeft?: number | string
    marginRight?: number | string
    speed?: number
}
