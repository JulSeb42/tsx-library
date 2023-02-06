/*=============================================== BackToTop types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    ObjectPositionTypes,
    AllColorsTypes,
} from "../../types"

interface BackToTopPropsBase
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType
    icon?: string
    color?: ColorsHoverTypes
    size?: number
    shadow?:
        | ShadowsTypes
        | {
              default: ShadowsTypes
              hover: ShadowsTypes
              active: ShadowsTypes
          }
    variant?: "plain" | "transparent"
    position?: ObjectPositionTypes
}

interface BackToTopContent1 extends BackToTopPropsBase {
    text?: string
    showText?: "always" | "hover"
    textColor?: AllColorsTypes
}

interface BackToTopContent2 extends BackToTopPropsBase {
    text?: never
    showText?: never
    textColor?: never
}

export type BackToTopProps = BackToTopContent1 | BackToTopContent2
