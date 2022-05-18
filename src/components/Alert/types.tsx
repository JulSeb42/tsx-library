// Imports
import { props as gridProps } from "../Grid/types"

export interface props extends gridProps {
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "gray"
        | string
    borderColor?: string
    modal?: boolean
    padding?: string | number
    gap?: string | number
    radius?: string | number
}
