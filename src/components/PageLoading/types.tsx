// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    background?: string
}

export interface props extends styleProps {
    loaderColor?: string
    loaderSize?: number
    loaderBorder?: number
    speed?: number
}
