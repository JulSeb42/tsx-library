// Components
import { ReactNode } from "react"
import { props as gridProps } from "../Grid/types"

// Types
export interface props extends gridProps {
    id: string
    label?: string
    helper?: string
    helperBottom?: string
    validationText?: string
    validation?: string
    value?: any
    counter?: boolean
    maxLength?: number
    children: ReactNode
}
