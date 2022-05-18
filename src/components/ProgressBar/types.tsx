// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLSpanElement> {
    value: number
    height?: number
    color?: string
    background?: string
}
