// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLDivElement> {
    align?:
        | "stretch"
        | "flex-start"
        | "flex-end"
        | "center"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "start"
        | "end"
        | "self-start"
        | "self end"
        | string
    justify?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "start"
        | "end"
        | "left"
        | "right"
        | string
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    gap?: string | number
}
