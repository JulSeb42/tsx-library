/*=============================================== Card types ===============================================*/

import React from "react"

import {
    RadiusesTypes,
    AllColorsTypes,
    ShadowsTypes,
    BoxShadowProps,
    PaddingTypes,
    CursorTypes,
    BorderStylesTypes,
} from "../../types"
import { FlexboxProps } from "../Flexbox/types"

interface CardPropsBase extends React.HTMLAttributes<HTMLDivElement>, FlexboxProps {
    as?: React.ElementType
    borderColor?: AllColorsTypes
    borderWidth?: number
    borderStyle?:
        | BorderStylesTypes
        | {
              left?: BorderStylesTypes
              top?: BorderStylesTypes
              right?: BorderStylesTypes
              bottom?: BorderStylesTypes
          }
    borderRadius?: RadiusesTypes
    padding?: PaddingTypes
    cursor?: CursorTypes
    width?: string | number
    height?: string | number
    shadow?: ShadowsTypes | BoxShadowProps
    backgroundColor?: AllColorsTypes
    textColor?: AllColorsTypes
}

interface CardPropsBehaviour1 extends CardPropsBase {
    to?: string
    href?: never
    blank?: boolean
    onClick?: never
}

interface CardPropsBehaviour2 extends CardPropsBase {
    to?: never
    href?: string
    blank?: boolean
    onClick?: never
}

interface CardPropsBehaviour3 extends CardPropsBase {
    to?: never
    href?: never
    blank?: never
    onClick?: () => void
}

export type CardProps =
    | CardPropsBehaviour1
    | CardPropsBehaviour2
    | CardPropsBehaviour3
