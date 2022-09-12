/*=============================================== Tabs types ===============================================*/

import React from "react"

import { ColorsHoverTypes, AllColorsTypes } from "../../utils/common-types"

import { TabsItemProps } from "../../utils/component-props"

/*==================== List possibilities ====================*/

const TableStyles = {
    basic: "basic",
    rounded: "rounded",
} as const

export type TabsVariantTypes = keyof typeof TableStyles

const Justify = {
    start: "start",
    stretch: "stretch",
} as const

export type JustifyTypes = keyof typeof Justify

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TabsItemProps[]
    contentColor?: AllColorsTypes
    justify?: JustifyTypes
    active?: number
    accentColor?: ColorsHoverTypes
    buttonColor?: AllColorsTypes
}

interface Possible1 extends BaseProps {
    variant?: "basic"
    separatorColor?: AllColorsTypes
    backgroundColor?: never
}

interface Possible2 extends BaseProps {
    variant?: "rounded"
    separatorColor?: never
    backgroundColor?: AllColorsTypes
}

export type TabsProps = Possible1 | Possible2
