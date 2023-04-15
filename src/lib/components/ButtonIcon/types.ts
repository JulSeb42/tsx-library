/*=============================================== ButtonIcon types ===============================================*/

import type { ButtonHTMLAttributes, ElementType, HTMLAttributes } from "react"

import type { ButtonLinkTypes, ColorsHoverTypes } from "../../types"

enum buttonIconVariants {
    plain,
    transparent,
    ghost,
}

export type ButtonIconVariantTypes = keyof typeof buttonIconVariants

enum labelDirections {
    top,
    bottom,
}

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

        isLoading?: boolean
        loaderBorder?: number

        variant?: ButtonIconVariantTypes
    }

type ButtonIconLabel1 = ButtonIconBaseProps & {
    label?: string
    showLabel?:
        | boolean
        | {
              position?: ButtonIconLabelDirectionsTypes
              bottom?: string | number
          }
}

type ButtonIconLabel2 = ButtonIconBaseProps & {
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
