/*=============================================== BackToTop types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    AllColorsTypes,
    SpacersTypes
} from "../../utils/common-types"
import { PositionsTypes } from "../Header/types"

export interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: string
    color?: ColorsHoverTypes
    size?: number

    textColor?: AllColorsTypes
    shadow?:
        | ShadowsTypes
        | {
              default: ShadowsTypes
              hover: ShadowsTypes
              active: ShadowsTypes
          }
    variant?: "plain" | "transparent"
    position?: {
        position?: PositionsTypes
        left?: number | string | SpacersTypes
        top?: number | string | SpacersTypes
        right?: number | string | SpacersTypes
        bottom?: number | string | SpacersTypes
        zIndex?: number
    }
}

interface Possible1 extends BaseProps {
    text?: string
    showText?: "always" | "hover"
    textColor?: AllColorsTypes
}

interface Possible2 extends BaseProps {
    text?: never
    showText?: never
    textColor?: never
}

export type BackToTopProps = Possible1 | Possible2
