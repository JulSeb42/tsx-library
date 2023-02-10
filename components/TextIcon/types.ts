/*=============================================== TextIcon types ===============================================*/

import React from "react"

import { AllColorsTypes, SpacersTypes } from "../../types"
import { TextProps } from "../Text/types"

enum tags {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    small,
    blockquote,
}

export type PossibleTextIconTags = keyof typeof tags

export type TextIconProps = TextProps & {
    as?: React.ElementType
    textAs?: React.ElementType
    icon: string
    iconColor?: AllColorsTypes
    iconSize?: number
    tag?: PossibleTextIconTags
    gap?: SpacersTypes
    display?: boolean
    fontWeightDt?: never
    fontWeightDd?: never
}
