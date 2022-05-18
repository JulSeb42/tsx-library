// Imports
import React from "react"

export interface buttonsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    col: number
}

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

export interface contentProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean
}
