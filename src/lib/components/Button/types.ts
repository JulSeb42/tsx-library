/*=============================================== Button types ===============================================*/

import type { ButtonHTMLAttributes, ElementType, HTMLAttributes } from "react"

import type { ButtonLinkTypes, ColorsHoverTypes } from "../../types"
import type { LoaderVariantTypes } from "../Loader/types"

enum buttonVariants {
    plain,
    outline,
    text,
    ghost,
}

export type ButtonVariantTypes = keyof typeof buttonVariants

enum buttonSizes {
    default,
    small,
}

export type ButtonSizesTypes = keyof typeof buttonSizes

type ButtonBaseProps = HTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    ButtonLinkTypes & {
        as?: ElementType
        color?: ColorsHoverTypes
        size?: ButtonSizesTypes
        variant?: ButtonVariantTypes
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

export type ButtonProps = ButtonLoading1 | ButtonLoading2
