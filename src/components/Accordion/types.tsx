// Packages
import { HTMLAttributes } from "react"

// Import types
import gridProps from "../Grid/types"

// Types
export interface containerProps extends gridProps {
    accordionStyle?: "basic" | "rounded"
}

export interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    icon?: "plus" | "chevron"
}

export interface itemProps extends HTMLAttributes<HTMLParagraphElement> {
    isOpen?: boolean
    icon?: "plus" | "chevron"
}

export interface contentProps extends HTMLAttributes<HTMLParagraphElement> {
    isOpen: boolean
}
