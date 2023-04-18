/*=============================================== Tabs types ===============================================*/

import type { HTMLAttributes, ElementType, ButtonHTMLAttributes } from "react"

import type {
    ColorsHoverTypes,
    AllColorsTypes,
    TabsItemProps,
    SpacersTypes,
} from "../../types"

const tabsVariants = { basic: "basic", rounded: "rounded" } as const

export type TabsVariantsType = keyof typeof tabsVariants

const justify = { start: "start", stretch: "stretch" } as const

export type TabsJustifyTypes = keyof typeof justify

/*====================== Tabs container ======================*/

export interface TabsContainerProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    gap?: SpacersTypes
}

/*====================== Tabs buttons container ======================*/

interface TabsButtonsContainerPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: any
    justify?: TabsJustifyTypes
    gap?: SpacersTypes
}

interface TabsButtonsContainerVariant1 extends TabsButtonsContainerPropsBase {
    variant?: "basic"
    separatorColor?: AllColorsTypes
    backgroundColor?: never
}

interface TabsButtonsContainerVariant2 extends TabsButtonsContainerPropsBase {
    variant?: "rounded"
    separatorColor?: never
    backgroundColor?: AllColorsTypes
}

export type TabsButtonsContainerProps =
    | TabsButtonsContainerVariant1
    | TabsButtonsContainerVariant2

/*====================== Tab button ======================*/

interface TabButtonPropsBase extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    isActive: boolean
    justify?: TabsJustifyTypes
    accentColor?: ColorsHoverTypes
    onClick: () => void
}

interface TabButtonPropsVariant1 extends TabButtonPropsBase {
    variant?: "basic"
    buttonColor?: AllColorsTypes
}

interface TabButtonPropsVariant2 extends TabButtonPropsBase {
    variant?: "rounded"
    buttonColor?: never
}

export type TabButtonProps = TabButtonPropsVariant1 | TabButtonPropsVariant2

/*====================== Tab item ======================*/

export interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isActive: boolean
}

/*====================== Tabs ======================*/

interface TabsPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    items: TabsItemProps[]
    contentColor?: AllColorsTypes
    justify?: TabsJustifyTypes
    active?: number
    accentColor?: ColorsHoverTypes
    buttonColor?: AllColorsTypes
    gap?: SpacersTypes
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

type TabsVariants = TabsVariants1 | TabsVariants2

type TabsUrl = TabsVariants & {
    showInUrl: true
    queries?: string[][]
}

type TabsNoUrl = TabsVariants & {
    showInUrl?: false | undefined
    queries?: never
}

export type TabsProps = TabsUrl | TabsNoUrl
