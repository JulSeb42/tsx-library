// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    width?: number
    height?: number
    border?: number
    color?: string
    isOpen: boolean
}

export interface props extends styleProps {
    ariaLabel?: string
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}
