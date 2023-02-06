/*=============================================== Flexbox types ===============================================*/

import React from "react"

import {
    SpacersTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    PaddingTypes
} from "../../types"

export interface FlexboxProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
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
