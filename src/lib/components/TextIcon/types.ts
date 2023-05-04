/*=============================================== TextIcon types ===============================================*/

import type { ElementType } from "react"

import type { AllColorsTypes } from "../../types"
import type { TextProps } from "../Text/types"

const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    small: "small",
    blockquote: "blockquote",
} as const

export type PossibleTextIconTags = keyof typeof tags

export type TextIconProps = TextProps & {
    as?: ElementType
    textAs?: ElementType
    icon: string
    iconColor?: AllColorsTypes
    iconSize?: number
    tag?: PossibleTextIconTags
}
