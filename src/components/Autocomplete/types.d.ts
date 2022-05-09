// Packages
import React from "react"

// Types
export interface styleProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: string
}

export interface props extends React.HTMLAttributes<HTMLInputElement> {
    helper?: string
    helperBottom?: string
    label?: string
    icon?: string
    disabled?: boolean
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void
    items: string[]
    value?: string
}
