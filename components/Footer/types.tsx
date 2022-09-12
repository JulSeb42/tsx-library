/*=============================================== Footer types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"
import { FooterItemProps } from "../../utils/component-props"

/*==================== List possibilities ====================*/

const direction = {
    horizontal: "horizontal",
    vertical: "vertical",
} as const

export type DirectionTypes = keyof typeof direction

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    separator?: boolean | AllColorsTypes
    accentColor?: ColorsHoverTypes
    
    as?: React.ElementType
}

interface PossibleContent1 extends BaseProps {
    items: FooterItemProps[]
    direction?: "horizontal"
}

interface PossibleContent2 extends BaseProps {
    items?: FooterItemProps[]
    direction?: "vertical"
}

type PossibleContent = PossibleContent1 | PossibleContent2

type Possible1 = PossibleContent & {
    logo: {
        img: string
        alt?: string
        width?: number
        height?: number
        text?: never
        color?: never
    }
}

type Possible2 = PossibleContent & {
    logo: {
        img?: never
        alt?: never
        width?: never
        height?: never
        text: string
        color?: AllColorsTypes
    }
}

type PossibleLogo = Possible1 | Possible2

type PossibleSeparator1 = PossibleLogo & {
    linksSeparator?: {
        icon: string
        symbol?: never
        color?: AllColorsTypes
    }
}

type PossibleSeparator2 = PossibleLogo & {
    linksSeparator?: {
        icon?: never
        symbol: string
        color?: AllColorsTypes
    }
}

export type FooterProps = PossibleSeparator1 | PossibleSeparator2
