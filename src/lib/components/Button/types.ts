/*=============================================== Button types ===============================================*/

import type { ButtonHTMLAttributes, ElementType, HTMLAttributes } from "react"

import type { ButtonLinkTypes, ColorsHoverTypes } from "../../types"
import type { LoaderVariantTypes } from "../Loader/types"

const buttonVariants = {
    plain: "plain",
    outline: "outline",
    transparent: "transparent",
    ghost: "ghost",
} as const

export type ButtonVariantTypes = keyof typeof buttonVariants

const buttonSizes = { default: "default", small: "small" } as const

export type ButtonSizesTypes = keyof typeof buttonSizes

type ButtonBaseProps = HTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    ButtonLinkTypes & {
        as?: ElementType
        color?: ColorsHoverTypes
        size?: ButtonSizesTypes
        icons?: {
            left?: string | JSX.Element
            right?: string | JSX.Element
            size?: number
        }
    }

type ButtonBehaviour1 = ButtonBaseProps & {
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

type ButtonBehaviour2 = ButtonBaseProps & {
    disabled?: never
    type?: never
}

type ButtonBehaviour = ButtonBehaviour1 | ButtonBehaviour2

type ButtonLoading1 = ButtonBehaviour & {
    isLoading?: true
    loaderVariant?: LoaderVariantTypes
}

type ButtonLoading2 = ButtonBehaviour & {
    isLoading?: false
    loaderVariant?: never
}

type ButtonLoading = ButtonLoading1 | ButtonLoading2

type ButtonVariant1 = ButtonLoading & {
    variant?: "plain" | "outline" | "ghost"
    noPadding?: never
}

type ButtonVariant2 = ButtonLoading & {
    variant?: "transparent"
    noPadding?: boolean
}

export type ButtonProps = ButtonVariant1 | ButtonVariant2
