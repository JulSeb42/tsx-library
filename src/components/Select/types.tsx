// Imports
import React from "react"

export interface styleSelectedProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    isOpen: boolean
    arrow?: boolean
    noSelect: boolean
    disabled?: boolean
}

export interface styleListProps extends React.HTMLAttributes<HTMLUListElement> {
    isOpen: boolean
    index?: number
}

export interface styleLiProps extends React.HTMLAttributes<HTMLLIElement> {
    selected: string | boolean
}

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    helper?: string
    validation?: string
    helperBottom?: string
    validationText?: string
    value?: string | number | boolean
    arrow?: any
    disabled?: boolean
    onClickSelect?: any
    isOpen: boolean
    selected: string | boolean
    index?: number
    id: string
}
