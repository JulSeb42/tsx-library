/*=============================================== Grid types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    PaddingTypes,
} from "../../types"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    inline?: boolean
    col?: number | string
    gap?: SpacersTypes
    columnGap?: SpacersTypes
    rowGap?: SpacersTypes
    justifyItems?: GridJustifyItemsTypes
    alignItems?: GridAlignItemsTypes
    justifyContent?: GridJustifyContentTypes
    alignContent?: GridAlignContentTypes
    padding?: PaddingTypes
}
