/*=============================================== Card types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    RadiusesTypes,
    AllColorsTypes,
    ShadowsTypes,
    BoxShadowProps,
    PaddingTypes,
    CursorTypes,
    BorderStylesTypes,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

interface CardPropsBase extends HTMLAttributes<HTMLDivElement>, FlexboxProps {
    as?: ElementType
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
    to?: string
}

interface CardPropsBehaviour1 extends CardPropsBase {
    href?: string
    blank?: boolean
    onClick?: never
}

interface CardPropsBehaviour2 extends CardPropsBase {
    href?: never
    blank?: never
    onClick?: () => void
}

export type CardProps = CardPropsBehaviour1 | CardPropsBehaviour2
