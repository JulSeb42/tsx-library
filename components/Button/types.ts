/*=============================================== Button types ===============================================*/

import React from "react"

import { ColorsHoverTypes, ShadowsTypes, BoxShadowProps, RadiusesTypes } from "../../types"
import { LoaderVariantTypes } from "../Loader/types"

enum buttonVariants {
    plain,
    outline,
    text,
}

export type ButtonVariantTypes = keyof typeof buttonVariants

interface ButtonBaseProps
    extends React.HTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils>,
        React.ButtonHTMLAttributes<
            HTMLButtonElement & HTMLHyperlinkElementUtils
        > {
    as?: React.ElementType
    color?: ColorsHoverTypes
    shadow?: ShadowsTypes | BoxShadowProps
    borderRadius?: RadiusesTypes
}

interface ButtonBehaviour1 extends ButtonBaseProps {
    to?: string
    disabled?: never
    type?: never
    href?: never
    blank?: never
}

interface ButtonBehaviour2 extends ButtonBaseProps {
    to?: never
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    href?: never
    blank?: never
}

interface ButtonBehaviour3 extends ButtonBaseProps {
    to?: never
    disabled?: never
    type?: never
    href?: string
    blank?: boolean
}

type ButtonBehaviour = ButtonBehaviour1 | ButtonBehaviour2 | ButtonBehaviour3

type ButtonIcon1 = ButtonBehaviour & {
    libicon?: never
    icons?: {
        left?: string | JSX.Element
        right?: string | JSX.Element
    }
}

type ButtonIcon2 = ButtonBehaviour & {
    libicon?: {
        left?: JSX.Element
        right?: JSX.Element
    }
    icons?: never
}

type ButtonIcon = ButtonIcon1 | ButtonIcon2

type ButtonVariant1 = ButtonIcon & {
    variant?: "plain" | "outline"
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
