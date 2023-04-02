/*=============================================== Button types ===============================================*/

import type { HTMLAttributes, ElementType, ButtonHTMLAttributes } from "react"

import type {
    ColorsHoverTypes,
    ShadowsTypes,
    BoxShadowProps,
    RadiusesTypes,
    SpacersTypes,
} from "../../types"
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

interface ButtonBaseProps
    extends HTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils>,
        ButtonHTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils> {
    as?: ElementType
    color?: ColorsHoverTypes
    shadow?: ShadowsTypes | BoxShadowProps
    borderRadius?: RadiusesTypes
    size?: ButtonSizesTypes
}

interface ButtonBehaviour1 extends ButtonBaseProps {
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    href?: never
    blank?: never
}

interface ButtonBehaviour2 extends ButtonBaseProps {
    disabled?: never
    type?: never
    href?: string
    blank?: boolean
}

type ButtonBehaviour = ButtonBehaviour1 | ButtonBehaviour2

type ButtonIcon0 = ButtonBehaviour & {
    icons?: undefined
    gap?: never
}

type ButtonIcon1 = ButtonBehaviour & {
    gap?: SpacersTypes
    icons?: {
        left?: string | JSX.Element
        right?: string | JSX.Element
        size?: number
    }
}

type ButtonIcon = ButtonIcon0 | ButtonIcon1

type ButtonVariant1 = ButtonIcon & {
    variant?: "plain" | "outline" | "ghost"
    noPadding?: never
}

type ButtonVariant2 = ButtonIcon & {
    variant?: "text"
    noPadding?: boolean
}

type ButtonVariant = ButtonVariant1 | ButtonVariant2

type ButtonLoading1 = ButtonVariant & {
    isLoading?: true
    loaderVariant?: LoaderVariantTypes
}

type ButtonLoading2 = ButtonVariant & {
    isLoading?: false
    loaderVariant?: never
}

export type ButtonProps = ButtonLoading1 | ButtonLoading2
