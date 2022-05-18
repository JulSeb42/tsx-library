// Imports
import React from "react"

export interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
}

export interface props extends styleProps {
    close?: (event: React.MouseEvent<HTMLElement>) => void
    icon?: string
    children: React.ReactNode
}
