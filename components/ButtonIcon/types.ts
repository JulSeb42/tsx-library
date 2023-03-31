/*=============================================== ButtonIcon types ===============================================*/

import type { HTMLAttributes, ElementType, ButtonHTMLAttributes } from "react"

import type {
    ColorsHoverTypes,
    ShadowsTypes,
    ObjectPositionTypes,
    BoxShadowProps,
    RadiusesTypes,
} from "../../types"

enum buttonIconVariants {
    plain,
    transparent,
    ghost,
}

export type ButtonIconVariantTypes = keyof typeof buttonIconVariants

enum labelDirections {
    up,
    down,
}

export type ButtonIconLabelDirectionsTypes = keyof typeof labelDirections

interface ButtonIconBaseProps
    extends HTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils>,
        ButtonHTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils> {
    as?: ElementType
    isLoading?: boolean
    color?: ColorsHoverTypes
    size?: number
    loaderBorder?: number
    shadow?: ShadowsTypes | BoxShadowProps
    position?: ObjectPositionTypes
    borderRadius?: RadiusesTypes
    className?: string
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
    href?: never
    blank?: never
}

type ButtonIconBehaviour2 = ButtonIconLabel & {
    type?: never
    disabled?: never
    href?: string
    blank?: boolean
}

type ButtonIconBehaviour = ButtonIconBehaviour1 | ButtonIconBehaviour2

type ButtonIconContent1 = ButtonIconBehaviour & {
    icon: string | JSX.Element
    iconSize?: number
    burger?: never
    isBurgerOpen?: never
    avatar?: never
}

type ButtonIconContent2 = ButtonIconBehaviour & {
    icon?: never
    iconSize?: never
    burger: boolean
    isBurgerOpen: boolean
    avatar?: never
}

type ButtonIconContent3 = ButtonIconBehaviour & {
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

type ButtonIconVariant1 = ButtonIconContent & {
    variant?: "plain" | "ghost"
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
    className?: string
}
