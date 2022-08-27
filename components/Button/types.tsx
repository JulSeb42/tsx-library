/*=============================================== Button types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const buttonStyles = {
    plain: "plain",
    text: "text",
    outline: "outline",
} as const

export type ButtonStylesType = keyof typeof buttonStyles

/*==================== Component props ====================*/

interface BaseProps
    extends React.HTMLAttributes<HTMLButtonElement>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    children: any
    ref?: any
    to?: string
    type?: "button" | "submit" | "reset" | undefined
    isLoading?: boolean
}

interface Possible1 extends BaseProps {
    options?: {
        variant?: "plain" | "outline"
        color?: ColorsHoverTypes
        noPadding?: never

        iconLeft?: string
        iconRight?: string
    }
}

interface Possible2 extends BaseProps {
    options?: {
        variant?: "text"
        color?: ColorsHoverTypes
        noPadding?: boolean

        iconLeft?: string
        iconRight?: string
    }
}

export type ButtonProps = Possible1 | Possible2
