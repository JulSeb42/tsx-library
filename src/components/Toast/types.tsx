// Packages
import React from "react"

// Types
export interface props extends React.HTMLAttributes<HTMLDivElement> {
    close?: (event: React.MouseEvent<HTMLElement>) => void
    icon?: string
    iconColor?: string
    customIconClose?: string
}

export interface titleProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon?: string
    iconColor?: string
}
