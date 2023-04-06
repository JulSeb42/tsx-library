/*=============================================== Header types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    ColorsHoverTypes,
    ShadowsTypes,
    AllColorsTypes,
} from "../../types"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"

enum navMenuVariants {
    left,
    right,
}

export type NavMenuVariantsTypes = keyof typeof navMenuVariants

enum navMobileVariants {
    full,
    top,
    drawer,
}

export type NavMobileVariantsTypes = keyof typeof navMobileVariants

type LogoContent1 = {
    text: string
    img?: never
    alt?: never
    width?: never
    height?: never
}

type LogoContent2 = {
    text?: never
    img: string
    alt?: string
    width?: number
    height?: number
}

type LogoContent = LogoContent1 | LogoContent2

type LogoLink1 = LogoContent & {
    to?: string
    href?: never
}

type LogoLink2 = LogoContent & {
    to?: never
    href?: string
}

type LogoLink = LogoLink1 | LogoLink2

interface HeaderPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    backgroundColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    burgerColor?: ColorsHoverTypes
    burgerPosition?: NavMenuVariantsTypes
    navColor?: AllColorsTypes
    navDesktopVariant?: NavMenuVariantsTypes
    navMobileVariant?: NavMobileVariantsTypes
    search?: {
        pathname: string
        search?: any
        icon?: string
        iconClear?: string
        placeholder?: string
        keyboardShortcut?: string[]
        showKeys?: boolean
        backgroundColor?: InputBackgroundTypes
        maxWidth?: string | number
        accentColor?: ColorsHoverTypes
        iconSize?: number
        variant?: InputVariantTypes
    }
    shadow?: ShadowsTypes
    logo: LogoLink
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
