/*=============================================== Header types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    AllColorsTypes,
    ShadowsTypes,
} from "../../utils/common-types"
import { InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"

/*==================== List possibilities ====================*/

const navDesktopVariants = {
    left: "left",
    right: "right",
} as const

export type NavDesktopVariantsTypes = keyof typeof navDesktopVariants

const navMobileVariants = {
    full: "full",
    top: "top",
    drawer: "drawer",
} as const

export type NavMobileVariantsTypes = keyof typeof navMobileVariants

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode | React.ReactNode[]
    backgroundColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    burgerColor?: ColorsHoverTypes
    burgerPosition?: "left" | "right"
    navColor?: AllColorsTypes
    navDesktopVariant?: NavDesktopVariantsTypes
    navMobileVariant?: NavMobileVariantsTypes
    search?: {
        search: string
        setSearch: (search: string) => void
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
        icon?: string
        iconClear?: string
        placeholder?: string
        id?: string
        keyboardShortcut?: string[]
        backgroundColor?: InputBackgroundTypes
        maxWidth?: string | number
        accentColor?: ColorsHoverTypes
        iconSize?: number
        variant?: InputsVariantsTypes
    }
    shadow?: ShadowsTypes
}

interface Possible1 extends BaseProps {
    logo: {
        text: string

        img?: never
        alt?: never
        width?: never
        height?: never

        to?: string
    }
}

interface Possible2 extends BaseProps {
    logo: {
        text?: never

        img: string
        alt?: string
        width?: number
        height?: number

        to?: string
    }
}

type Possible = Possible1 | Possible2

type PossiblePosition1 = Possible & {
    position?: "relative" | "absolute"
    hideOnScroll?: never
}

type PossiblePosition2 = Possible & {
    position?: "fixed"
    hideOnScroll?: number | boolean
}

export type HeaderProps = PossiblePosition1 | PossiblePosition2
