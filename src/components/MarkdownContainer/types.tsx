// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLElement> {
    gap?: string | number
}

export interface props extends styleProps {
    options?: any
    children?: any
}
