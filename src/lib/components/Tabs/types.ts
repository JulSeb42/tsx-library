/*=============================================== Tabs types ===============================================*/

import type { ButtonHTMLAttributes, ElementType, HTMLAttributes } from "react"

import type { TabsItemProps } from "../../types"

const tabsVariants = { basic: "basic", rounded: "rounded" } as const

export type TabsVariantsType = keyof typeof tabsVariants

const justify = { start: "start", stretch: "stretch" } as const

export type TabsJustifyTypes = keyof typeof justify

/*====================== Tabs container ======================*/

export interface TabsContainerProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
}

/*====================== Tabs buttons container ======================*/

export interface TabsButtonsContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: any
    justify?: TabsJustifyTypes
    variant?: TabsVariantsType
}

/*====================== Tab button ======================*/

export interface TabButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    isActive: boolean
    justify?: TabsJustifyTypes
    onClick: () => void
    variant?: TabsVariantsType
}

/*====================== Tab item ======================*/

export interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isActive: boolean
}

/*====================== Tabs ======================*/

interface TabsPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    items: TabsItemProps[]
    justify?: TabsJustifyTypes
    active?: number
    variant?: TabsVariantsType
}

type TabsUrl = TabsPropsBase & {
    showInUrl?: true
    queries?: string[][]
}

type TabsNoUrl = TabsPropsBase & {
    showInUrl?: false | undefined
    queries?: never
}

export type TabsProps = TabsUrl | TabsNoUrl
