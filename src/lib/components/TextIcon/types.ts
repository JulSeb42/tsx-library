/*=============================================== TextIcon types ===============================================*/

import type { ElementType } from "react"

import type { AllColorsTypes } from "../../types"
import type { TextProps } from "../Text/types"

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
    as?: ElementType
    textAs?: ElementType
    icon: string
    iconColor?: AllColorsTypes
    iconSize?: number
    tag?: PossibleTextIconTags
    display?: boolean
}
