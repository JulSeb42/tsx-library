/*=============================================== Key types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    FontSizeTypes,
    AllColorsTypes,
    SpacersTypes,
    PaddingTypes,
    RadiusesTypes,
} from "../../types"

interface KeyPropsBase extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    keys: string[]
    fontSize?: FontSizeTypes
    fontColor?: AllColorsTypes
    backgroundColor?: AllColorsTypes
    borderColor?: AllColorsTypes
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

export type KeyProps = KeyPropsSeparator1 | KeyPropsSeparator2
