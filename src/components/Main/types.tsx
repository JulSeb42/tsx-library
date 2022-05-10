// Packages
import { HTMLAttributes } from "react"

// Types
export interface props extends HTMLAttributes<HTMLElement> {
    gap?: string | number
    template?: "1col" | "aside-left" | "aside-right" | "both-sides" | "form"
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
}
