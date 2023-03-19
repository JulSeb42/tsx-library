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

enum labelDirections {
    up,
    down,
}

export type ButtonIconLabelDirectionsTypes = keyof typeof labelDirections

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
    showLabel?:
        | boolean
        | {
              position?: ButtonIconLabelDirectionsTypes
              bottom?: string | number
          }
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
    to?: string | "prev"
    href?: never
    blank?: boolean
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

type ButtonIconContent1 = ButtonIconBehaviour & {
    icon?: never
    iconSize?: never
    libicon: JSX.Element
    burger?: never
    isBurgerOpen?: never
    avatar?: never
}

type ButtonIconContent2 = ButtonIconBehaviour & {
    icon: string
    iconSize?: number
    libicon?: never
    burger?: never
    isBurgerOpen?: never
    avatar?: never
}

type ButtonIconContent3 = ButtonIconBehaviour & {
    icon?: never
    iconSize?: never
    libicon?: never
    burger: boolean
    isBurgerOpen: boolean
    avatar?: never
}

type ButtonIconContent4 = ButtonIconBehaviour & {
    icon?: never
    iconSize?: never
    libicon?: never
    burger?: never
    isBurgerOpen?: never
    avatar: string
}

type ButtonIconContent =
    | ButtonIconContent1
    | ButtonIconContent2
    | ButtonIconContent3
    | ButtonIconContent4

type ButtonIconVariant1 = ButtonIconContent & {
    variant?: "plain"
    hoverBackground?: never
}

type ButtonIconVariant2 = ButtonIconContent & {
    variant?: "transparent"
    hoverBackground?: boolean
}

export type ButtonIconProps = ButtonIconVariant1 | ButtonIconVariant2

export interface TipsProps {
    label?: string
    bottom?: string | number
    children?: any
    position?: ObjectPositionTypes
    size?: number
    tipPosition?: ButtonIconLabelDirectionsTypes
}
