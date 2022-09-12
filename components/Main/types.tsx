/*=============================================== Main types ===============================================*/

import React from "react"

import {
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    SpacersTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

const sizes = {
    default: "default",
    large: "large",
    form: "form",
    full: "full",
} as const

export type SizesTypes = keyof typeof sizes

const positions = { 1: 1, 2: 2 } as const

export type PositionsTypes = keyof typeof positions

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: PositionsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    gap?: SpacersTypes | number
    as?: React.ElementType
}

interface Possible1 extends BaseProps {
    size?: "default" | "large" | "form" | number
    contentWidth?: never
}

interface Possible2 extends BaseProps {
    size?: "full"
    contentWidth?: "default" | "large" | "form"
}

export type MainProps = Possible1 | Possible2
