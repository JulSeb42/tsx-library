// Imports
import { HTMLAttributes } from "react"

export interface props extends HTMLAttributes<HTMLDivElement> {
    gap?: string | number
    padding?: string | number
    template?: "1col" | "2cols" | "3cols"
}
