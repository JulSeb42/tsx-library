// Packages
import { HTMLAttributes } from "react"

// Import types
import gridProps from "../Grid/types"

// Types
export interface containerProps extends gridProps {
    accordionStyle?: string
}

export interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    icon?: string
}

export interface itemProps extends HTMLAttributes<HTMLParagraphElement> {
    isOpen?: boolean
    icon?: string
}

export interface contentProps extends HTMLAttributes<HTMLParagraphElement> {
    isOpen: boolean
}
