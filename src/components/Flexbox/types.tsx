// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    justifyContent?:
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
    alignItems?:
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
    alignContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch"
        | "start"
        | "end"
        | "baseline"
        | "first baseline"
        | "unsafe"
    gap?: number | string
    padding?: number | string
}
