// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | number | string
    colTablet?: string
    colMobile?: string
    gap?: number | string
    inline?: boolean
    rows?: string
    areas?: string
    justifyItems?: "start" | "end" | "center" | "stretch"
    alignItems?: "start" | "end" | "center" | "stretch"
    justifyContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
    alignContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
    padding?: number | string
}
