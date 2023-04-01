/*=============================================== Flexbox types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // SpacersTypes,
    // FlexAlignContentTypes,
    // FlexAlignItemsTypes,
    // FlexDirectionTypes,
    // FlexJustifyContentTypes,
    // FlexJustifyItemsTypes,
    // FlexWrapTypes,
    // PaddingTypes
    SpacersTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    PaddingTypes,
} from "../../types"

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    inline?: boolean
    flexDirection?: FlexDirectionTypes
    flexWrap?: FlexWrapTypes
    justifyContent?: FlexJustifyContentTypes
    alignItems?: FlexAlignItemsTypes
    justifyItems?: FlexJustifyItemsTypes
    alignContent?: FlexAlignContentTypes
    gap?: SpacersTypes
    columnGap?: SpacersTypes
    rowGap?: SpacersTypes
    padding?: PaddingTypes
}
