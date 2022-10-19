/*=============================================== BackToTop types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    AllColorsTypes,
    ObjectPositionTypes
} from "../../utils/common-types"

export interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
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
