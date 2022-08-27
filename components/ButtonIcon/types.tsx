/*=============================================== ButtonIcon types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const buttonStyles = {
    plain: "plain",
    transparent: "transparent",
} as const

export type ButtonStylesProps = keyof typeof buttonStyles

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon: string
    isLoading?: boolean
    to?: string
    disabled?: boolean
}

interface Possible1 extends BaseProps {
    options?: {
        variant?: "plain"
        hoverBackground?: never

        color?: ColorsHoverTypes
        size?: number
        loaderBorder?: number
    }
}

interface Possible2 extends BaseProps {
    options?: {
        variant?: "transparent"
        hoverBackground?: boolean

        color?: ColorsHoverTypes
        size?: number
        loaderBorder?: number
    }
}

export type ButtonIconProps = Possible1 | Possible2
