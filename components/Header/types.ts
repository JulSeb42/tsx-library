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
        backgroundColor?: InputBackgroundTypes
        maxWidth?: string | number
        accentColor?: ColorsHoverTypes
        iconSize?: number
        variant?: InputVariantTypes
    }
    shadow?: ShadowsTypes
}

interface HeaderLogo1 extends HeaderPropsBase {
    logo: {
        text: string

        img?: never
        alt?: never
        width?: never
        height?: never

        href?: string
    }
}

interface HeaderLogo2 extends HeaderPropsBase {
    logo: {
        text?: never

        img: string
        alt?: string
        width?: number
        height?: number

        href?: string
    }
}

type HeaderLogo = HeaderLogo1 | HeaderLogo2

type HeaderPosition1 = HeaderLogo & {
    position?: "relative" | "absolute"
    hideOnScroll?: never
}

type HeaderPosition2 = HeaderLogo & {
    position?: "fixed"
    hideOnScroll?: number | boolean
}

export type HeaderProps = HeaderPosition1 | HeaderPosition2
