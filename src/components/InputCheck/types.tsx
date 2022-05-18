// Imports
import React from "react"

export interface styleContainerProps extends React.HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
    justify?: "start" | "center" | "end" | "stretch"
}

export interface styleLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
    selector?: boolean
}

export interface styleCheckProps extends React.HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
}

export interface props extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    selector?: boolean
    toggle?: boolean
    label: string
    justify?: "start" | "center" | "end" | "stretch"
    type?: "checkbox" | "radio"
    icon?: string
    name?: string
}
