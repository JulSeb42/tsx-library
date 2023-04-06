/*=============================================== Key types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    FontSizeTypes,
    AllColorsTypes,
    SpacersTypes,
    PaddingTypes,
    RadiusesTypes,
    ColorsHoverTypes,
} from "../../types"

interface KeyPropsBase extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    keys: string[]
    fontSize?: FontSizeTypes
    fontColor?: AllColorsTypes
    padding?: PaddingTypes
    borderRadius?: RadiusesTypes
    borderWidth?: number
}

interface KeyPropsSeparator1 extends KeyPropsBase {
    separator?: true | AllColorsTypes
    gap?: SpacersTypes
}

interface KeyPropsSeparator2 extends KeyPropsBase {
    separator?: false | undefined
    gap?: never
}

type KeyPropsSeparator = KeyPropsSeparator1 | KeyPropsSeparator2

type KeyColor1 = KeyPropsSeparator & {
    backgroundColor?: ColorsHoverTypes
    borderColor?: ColorsHoverTypes
    accentColor?: never
}

type KeyColor2 = KeyPropsSeparator & {
    backgroundColor?: never
    borderColor?: never
    accentColor?: ColorsHoverTypes
}

export type KeyProps = KeyColor1 | KeyColor2
