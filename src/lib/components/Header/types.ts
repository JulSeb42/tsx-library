/*=============================================== Header types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { LinkTypes } from "../../types"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"

const navMenuVariants = { left: "left", right: "right" } as const

export type NavMenuVariantsTypes = keyof typeof navMenuVariants

const navMobileVariants = {
    full: "full",
    top: "top",
    drawer: "drawer",
} as const

export type NavMobileVariantsTypes = keyof typeof navMobileVariants

type LogoContent1 = LinkTypes & {
    text: string
    img?: never
    alt?: never
    width?: never
    height?: never
}

type LogoContent2 = LinkTypes & {
    text?: never
    img: string
    alt?: string
    width?: number
    height?: number
}

type LogoLink = LogoContent1 | LogoContent2

interface HeaderPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    logo: LogoLink
    variant?: "primary" | "white" | "transparent"
    burgerPosition?: NavMenuVariantsTypes
    navDesktopVariant?: NavMenuVariantsTypes
    navMobileVariant?: NavMobileVariantsTypes
    search?: {
        pathname: string
        search?: any
        icon?: string
        iconClear?: string | JSX.Element
        placeholder?: string
        keyboardShortcut?: string[]
        showKeys?: boolean
        backgroundColor?: InputBackgroundTypes
        maxWidth?: string | number
        iconSize?: number
        variant?: InputVariantTypes
    }
}

type HeaderPosition1 = HeaderPropsBase & {
    position?: "relative" | "absolute"
    hideOnScroll?: never
}

type HeaderPosition2 = HeaderPropsBase & {
    position?: "fixed"
    hideOnScroll?: number | boolean
}

export type HeaderProps = HeaderPosition1 | HeaderPosition2
