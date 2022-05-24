// Imports
import React from "react"
import { props as flexboxProps } from "../Flexbox/types"

export interface containerProps extends flexboxProps {
    
}

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    position?: "left" | "right"
    background?: string
    shadow?: string
    color?: string
}
