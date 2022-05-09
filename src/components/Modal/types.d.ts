// Packages
import React from "react"

// Types
export interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean
}

export interface props {
    open: boolean
    close?: (event: React.MouseEvent<HTMLElement>) => void
    icon?: string
    children: React.ReactNode
}
