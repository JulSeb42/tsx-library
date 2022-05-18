// Imports
import { HTMLAttributes } from "react"

export interface props extends HTMLAttributes<HTMLDivElement> {
    gap?: string | number
    col?: 1 | 2
    justify?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    align?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    width?: string | number
}
