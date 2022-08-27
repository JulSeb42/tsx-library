/*=============================================== Table types ===============================================*/

import React from "react"

import { TextAlignTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const tableStyle = {
    bordered: "bordered",
    stripped: "stripped",
} as const

export type TableStyleTypes = keyof typeof tableStyle

const vAlign = {
    baseline: "baseline",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    sub: "sub",
    "text-top": "text-top",
} as const

export type VAlignTypes = keyof typeof vAlign

/*==================== Component Types ====================*/

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode | React.ReactNode[]
    options?: {
        variant?: TableStyleTypes
        textAlign?: TextAlignTypes
        vAlign?: VAlignTypes
    }
}
