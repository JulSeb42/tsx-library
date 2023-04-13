/*=============================================== Badge types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { AllColorsTypes, PaddingTypes, RadiusesTypes } from "../../types"

interface BadgeBaseProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    color?: AllColorsTypes
    size?: number
    borderRadius?: RadiusesTypes
}

interface BadgeContent1 extends BadgeBaseProps {
    content?: number
    contentColor?: AllColorsTypes
    padding?: PaddingTypes
}

interface BadgeContent2 extends BadgeBaseProps {
    content?: string
    contentColor?: AllColorsTypes
    padding?: never
}

interface BadgeContent3 extends BadgeBaseProps {
    content?: undefined
    contentColor?: never
    padding?: never
}

export type BadgeProps = BadgeContent1 | BadgeContent2 | BadgeContent3
