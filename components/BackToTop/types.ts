/*=============================================== BackToTop types ===============================================*/

import type { ElementType, ButtonHTMLAttributes } from "react"

import type {
    ColorsHoverTypes,
    ShadowsTypes,
    ObjectPositionTypes,
    AllColorsTypes,
    BoxShadowProps,
} from "../../types"

interface BackToTopPropsBase extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    icon?: string
    color?: ColorsHoverTypes
    size?: number
    shadow?: ShadowsTypes | BoxShadowProps
    variant?: "plain" | "transparent"
    position?: ObjectPositionTypes
    text?: string
}

interface BackToTopContent1 extends BackToTopPropsBase {
    showText?: "always" | "hover" | true
    textColor?: AllColorsTypes
}

interface BackToTopContent2 extends BackToTopPropsBase {
    showText?: false
    textColor?: never
}

export type BackToTopProps = BackToTopContent1 | BackToTopContent2
