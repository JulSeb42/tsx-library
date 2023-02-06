/*=============================================== Badge types ===============================================*/

import React from "react"

import { AllColorsTypes, PaddingTypes } from "../../types"

interface BadgeBaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    color?: AllColorsTypes
    size?: number
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
