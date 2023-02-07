/*=============================================== ButtonIcon types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    ObjectPositionTypes,
    BoxShadowProps,
    RadiusesTypes,
} from "../../types"

enum buttonIconVariants {
    plain,
    transparent,
}

export type ButtonIconVariantTypes = keyof typeof buttonIconVariants

interface ButtonIconBaseProps
    extends React.HTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils>,
        React.ButtonHTMLAttributes<
            HTMLButtonElement & HTMLHyperlinkElementUtils
        > {
    as?: React.ElementType
    isLoading?: boolean
    color?: ColorsHoverTypes
    size?: number
    loaderBorder?: number
    shadow?: ShadowsTypes | BoxShadowProps
    position?: ObjectPositionTypes
    borderRadius?: RadiusesTypes
}

interface ButtonIconLabel1 extends ButtonIconBaseProps {
    label?: string
    showLabel?: boolean
}

interface ButtonIconLabel2 extends ButtonIconBaseProps {
    label?: undefined
    showLabel?: never
}

type ButtonIconLabel = ButtonIconLabel1 | ButtonIconLabel2

type ButtonIconBehaviour1 = ButtonIconLabel & {
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
    to?: never
    href?: never
    blank?: never
}

type ButtonIconBehaviour2 = ButtonIconLabel & {
    type?: never
    disabled?: never
    to?: string
    href?: never
    blank?: never
}

type ButtonIconBehaviour3 = ButtonIconLabel & {
    type?: never
    disabled?: never
    to?: never
    href?: string
    blank?: boolean
}

type ButtonIconBehaviour =
    | ButtonIconBehaviour1
    | ButtonIconBehaviour2
    | ButtonIconBehaviour3

type ButtonIconIcon1 = ButtonIconBehaviour & {
    icon?: never
    iconSize?: never
    libicon: JSX.Element
    burger?: never
    isBurgerOpen?: never
}

type ButtonIconIcon2 = ButtonIconBehaviour & {
    icon: string
    iconSize?: number
    libicon?: never
    burger?: never
    isBurgerOpen?: never
}

type ButtonIconIcon3 = ButtonIconBehaviour & {
    icon?: never
    iconSize?: never
    libicon?: never
    burger: boolean
    isBurgerOpen: boolean
}

type ButtonIconIcon = ButtonIconIcon1 | ButtonIconIcon2 | ButtonIconIcon3

type ButtonIconVariant1 = ButtonIconIcon & {
    variant?: "plain"
    hoverBackground?: never
}

type ButtonIconVariant2 = ButtonIconIcon & {
    variant?: "transparent"
    hoverBackground?: boolean
}

export type ButtonIconProps = ButtonIconVariant1 | ButtonIconVariant2

export interface TipsProps {
    label?: string
    children?: any
    position?: ObjectPositionTypes
    size?: number
}
