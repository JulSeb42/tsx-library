// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean
    more?: boolean
}

export interface props extends styleProps {
    prev?: boolean
    customIconPrev?: string
    customIconMore?: string
    number?: number
    next?: boolean
    customIconNext?: string
    disabled?: boolean
}
