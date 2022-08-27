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
    form: "form,",
} as const

export type SizesTypes = keyof typeof sizes

const positions = { 1: 1, 2: 2 } as const

export type PositionsTypes = keyof typeof positions

/*==================== Component Types ====================*/

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizesTypes | number
    position?: PositionsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    gap?: SpacersTypes | number
}
