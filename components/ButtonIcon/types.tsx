/*=============================================== ButtonIcon types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    ObjectPositionTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

const buttonStyles = {
    plain: "plain",
    transparent: "transparent",
} as const

export type ButtonStylesProps = keyof typeof buttonStyles

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils> {
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
    position?: ObjectPositionTypes
    label: string
    showLabel?: boolean
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

export interface TipsProps {
    label: string
    children?: any
    position?: ObjectPositionTypes
    size?: number
}