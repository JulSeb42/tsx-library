/*=============================================== Tag types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    // AllColorsTypes,
    // SpacersTypes,
    // PaddingTypes,
    // RadiusesTypes,
    AllColorsTypes,
    SpacersTypes,
    PaddingTypes,
    RadiusesTypes,
} from "../../types"

interface TagPropsBase extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    color?: AllColorsTypes
    textColor?: AllColorsTypes
    padding?: PaddingTypes
    borderRadius?: RadiusesTypes
}

interface TagPropsNoIcon extends TagPropsBase {
    icons?: undefined
    gap?: never
}

interface TagPropsWithIcon extends TagPropsBase {
    icons?: {
        left?: string | JSX.Element
        right?: string | JSX.Element
    }
    gap?: SpacersTypes
}

export type TagProps = TagPropsNoIcon | TagPropsWithIcon
