// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLSpanElement> {
    justify?: "start" | "center" | "end" | "stretch"
    pill?: boolean
    color?: string
    textColor?: string
}
