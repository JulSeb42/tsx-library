/*=============================================== TextIcon types ===============================================*/

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"
import { AllProps as TextProps, WeightTypes } from "../Text/types"

/*==================== List possibilities ====================*/

const possibleTags = {
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

export type PossibleTextIconTags = keyof typeof possibleTags

/*==================== Component Types ====================*/

export type TextIconProps = TextProps & {
    icon: string
    iconColor?: AllColorsTypes
    children?: any
    tag?: PossibleTextIconTags
    gap?: SpacersTypes | number
    fontWeight?: WeightTypes | number
    fontWeightDt?: never
    fontWeightDd?: never
}
