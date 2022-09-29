/*=============================================== Footer types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"
import { FooterItemProps } from "../../utils/component-props"
import { RequireAtLeastOne } from "../../utils/RequireAtLeastOne"

/*==================== List possibilities ====================*/

const direction = {
    horizontal: "horizontal",
    vertical: "vertical",
} as const

export type DirectionTypes = keyof typeof direction

type PossibleLogo1 = {
    img: string
    alt?: string
    width?: number
    height?: number
    text?: never
    color?: never
}

type PossibleLogo2 = {
    img?: never
    alt?: never
    width?: never
    height?: never
    text: string
    color?: AllColorsTypes
}

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    separator?: boolean | AllColorsTypes
    accentColor?: ColorsHoverTypes
    as?: React.ElementType
}

interface PossibleContent1 extends BaseProps {
    items: FooterItemProps[]
    logo: PossibleLogo1 | PossibleLogo2
    direction?: "horizontal"
}

interface PossibleContent2 extends BaseProps {
    items?: FooterItemProps[]
    logo?: PossibleLogo1 | PossibleLogo2
    direction?: "vertical"
}

type PossibleContentRequire = RequireAtLeastOne<
    PossibleContent2,
    "items" | "logo"
>

type PossibleContent = PossibleContent1 | PossibleContentRequire

type PossibleSeparator1 = PossibleContent & {
    linksSeparator?:
        | "empty"
        | {
              icon: string
              symbol?: never
              color?: AllColorsTypes
          }
}

type PossibleSeparator2 = PossibleContent & {
    linksSeparator?:
        | "empty"
        | {
              icon?: never
              symbol: string
              color?: AllColorsTypes
          }
}

export type FooterProps = PossibleSeparator1 | PossibleSeparator2
