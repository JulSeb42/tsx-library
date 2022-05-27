// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: string
    index?: number
}

export interface props extends styleProps {
    helper?: string
    helperBottom?: string
    label?: string
    icon?: string
    disabled?: boolean
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void
    items: string[] | number[]
    value?: string
    index?: number
}
