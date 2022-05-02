// Packages
import { HTMLAttributes } from "react"

// Types
export interface styleSelectedProps extends HTMLAttributes<HTMLSpanElement> {
    isOpen: boolean
    arrow?: any
    noSelect: boolean
    disabled?: boolean
}

export interface styleListProps extends HTMLAttributes<HTMLUListElement> {
    isOpen: boolean
    index?: number
}

export interface styleLiProps extends HTMLAttributes<HTMLLIElement> {
    selected: string | boolean
}

export interface props extends HTMLAttributes<HTMLDivElement> {
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
