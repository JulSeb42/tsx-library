/*=============================================== ButtonIcon types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    SpacersTypes,
} from "../../utils/common-types"
import { PositionsTypes } from "../Header/types"

/*==================== List possibilities ====================*/

const buttonStyles = {
    plain: "plain",
    transparent: "transparent",
} as const

export type ButtonStylesProps = keyof typeof buttonStyles

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset" | undefined
    isLoading?: boolean
    to?: string
    disabled?: boolean
    color?: ColorsHoverTypes
    size?: number
    loaderBorder?: number
    shadow?:
        | ShadowsTypes
        | {
              default: ShadowsTypes
              hover: ShadowsTypes
              active: ShadowsTypes
          }
    position?: {
        position?: PositionsTypes
        left?: number | string | SpacersTypes
        top?: number | string | SpacersTypes
        right?: number | string | SpacersTypes
        bottom?: number | string | SpacersTypes
        zIndex?: number
    }
}

interface PossibleIcon1 extends BaseProps {
    icon?: never
    libicon: JSX.Element
    burger?: never
    isBurgerOpen?: never
}

interface PossibleIcon2 extends BaseProps {
    icon: string
    libicon?: never
    burger?: never
    isBurgerOpen?: never
}

interface PossibleIcon3 extends BaseProps {
    icon?: never
    libicon?: never
    burger: boolean
    isBurgerOpen: boolean
}

type IconProps = PossibleIcon1 | PossibleIcon2 | PossibleIcon3

type Possible1 = IconProps & {
    variant?: "plain"
    hoverBackground?: never
}

type Possible2 = IconProps & {
    variant?: "transparent"
    hoverBackground?: boolean
}

export type ButtonIconProps = Possible1 | Possible2
