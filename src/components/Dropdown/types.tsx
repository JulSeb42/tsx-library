// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    position?: "left" | "right"
    background?: string
    shadow?: string
    color?: string
}
