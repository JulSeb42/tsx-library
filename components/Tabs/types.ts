/*=============================================== Tabs types ===============================================*/

import React from "react"

import { ColorsHoverTypes, AllColorsTypes, TabsItemProps } from "../../types"

enum tabsVariants {
    basic,
    rounded,
}

export type TabsVariantsType = keyof typeof tabsVariants

enum justify {
    start,
    stretch,
}

export type TabsJustifyTypes = keyof typeof justify

interface TabsPropsBase extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    items: TabsItemProps[]
    contentColor?: AllColorsTypes
    justify?: TabsJustifyTypes
    active?: number
    accentColor?: ColorsHoverTypes
    buttonColor?: AllColorsTypes
}

interface TabsVariants1 extends TabsPropsBase {
    variant?: "basic"
    separatorColor?: AllColorsTypes
    backgroundColor?: never
}

interface TabsVariants2 extends TabsPropsBase {
    variant?: "rounded"
    separatorColor?: never
    backgroundColor?: AllColorsTypes
}

export type TabsProps = TabsVariants1 | TabsVariants2
