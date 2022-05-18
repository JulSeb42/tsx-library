// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: string
    textStyle?: "dotted" | "underline" | "bold"
}

export interface styleTipProps extends React.HTMLAttributes<HTMLSpanElement> {
    isVisible: boolean
}

export interface props extends styleProps {
    text: string
}
