/*=============================================== ButtonIcon types ===============================================*/

import type { ButtonHTMLAttributes, ElementType, HTMLAttributes } from "react"

import type { ButtonLinkTypes, ColorsHoverTypes } from "../../types"

const buttonIconVariants = {
    plain: "plain",
    transparent: "transparent",
    ghost: "ghost",
} as const

export type ButtonIconVariantTypes = keyof typeof buttonIconVariants

const labelDirections = { top: "top", bottom: "bottom" } as const

export type ButtonIconLabelDirectionsTypes = keyof typeof labelDirections

type ButtonIconBaseProps = HTMLAttributes<
    HTMLButtonElement & HTMLAnchorElement
> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    ButtonLinkTypes & {
        as?: ElementType
        icon: string | JSX.Element
        iconSize?: number
        color?: ColorsHoverTypes
        size?: number
        variant?: ButtonIconVariantTypes
    }

type ButtonIconLoading1 = ButtonIconBaseProps & {
    isLoading?: boolean
    loaderBorder?: number
}

type ButtonIconLoading2 = ButtonIconBaseProps & {
    isLoading?: undefined
    loaderBorder?: never
}

type ButtonIconLoading = ButtonIconLoading1 | ButtonIconLoading2

type ButtonIconLabel1 = ButtonIconLoading & {
    label?: string
    showLabel?:
        | boolean
        | {
              position?: ButtonIconLabelDirectionsTypes
              bottom?: string | number
          }
}

type ButtonIconLabel2 = ButtonIconLoading & {
    label?: undefined
    showLabel?: never
}

type ButtonIconLabel = ButtonIconLabel1 | ButtonIconLabel2

type ButtonIconBehaviour1 = ButtonIconLabel & {
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}

type ButtonIconBehaviour2 = ButtonIconLabel & {
    type?: never
    disabled?: never
}

export type ButtonIconProps = ButtonIconBehaviour1 | ButtonIconBehaviour2

export interface TipsProps {
    label?: string
    bottom?: string | number
    children?: JSX.Element
    size?: number
    tipPosition?: ButtonIconLabelDirectionsTypes
    className?: string
}
