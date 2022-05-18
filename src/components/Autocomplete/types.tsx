// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: string
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
}
