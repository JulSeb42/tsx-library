/*=============================================== Tabs types ===============================================*/

import React from "react"

import { TabsItemProps } from "../../utils/component-props"

/*==================== List possibilities ====================*/

const TableStyles = {
    basic: "basic",
    rounded: "rounded",
} as const

export type TableStylesTypes = keyof typeof TableStyles

const Justify = {
    start: "start",
    stretch: "stretch",
} as const

export type JustifyTypes = keyof typeof Justify

/*==================== Component Types ====================*/

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TabsItemProps[]
    options?: {
        style?: TableStylesTypes
        justify?: JustifyTypes
        active?: number
    }
}
