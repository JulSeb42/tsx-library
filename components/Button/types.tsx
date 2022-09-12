/*=============================================== Button types ===============================================*/

import React from "react"

import { ColorsHoverTypes, ShadowsTypes } from "../../utils/common-types"
import { LoaderVariantsTypes } from "../Loader/types"

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
    to?: string
    type?: "button" | "submit" | "reset" | undefined
    color?: ColorsHoverTypes
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    shadow?:
        | ShadowsTypes
        | {
              default: ShadowsTypes
              hover: ShadowsTypes
              active: ShadowsTypes
          }
}

interface PossibleIcons1 extends BaseProps {
    children?: any
    libicon?: never
    icons?: {
        left?: string | JSX.Element
        right?: string | JSX.Element
        only?: never
    }
}

interface PossibleIcons2 extends BaseProps {
    children?: never
    libicon?: never
    icons?: {
        left?: never
        right?: never
        only?: string | JSX.Element
    }
}

interface PossibleIcons3 extends BaseProps {
    children?: any
    libicon?: {
        left?: JSX.Element
        right?: JSX.Element
        only?: never
    }
    icons?: never
}

interface PossibleIcons4 extends BaseProps {
    children?: never
    libicon?: {
        left?: never
        right?: never
        only?: JSX.Element
    }
    icons?: never
}

type PossibleIcons =
    | PossibleIcons1
    | PossibleIcons2
    | PossibleIcons3
    | PossibleIcons4

type PossibleVariant1 = PossibleIcons & {
    variant?: "plain" | "outline"
    noPadding?: never
}

type PossibleVariant2 = PossibleIcons & {
    variant?: "text"
    noPadding?: boolean
}

type PossibleVariant = PossibleVariant1 | PossibleVariant2

type PossibleLoading1 = PossibleVariant & {
    isLoading?: true
    loaderVariant?: LoaderVariantsTypes
}

type PossibleLoading2 = PossibleVariant & {
    isLoading?: false
    loaderVariant?: never
}

export type ButtonProps = PossibleLoading1 | PossibleLoading2
