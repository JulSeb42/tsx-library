// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    col?:
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    gap?: string | number
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
    row?: string
    area?: string
}

export default props
