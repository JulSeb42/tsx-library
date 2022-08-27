/*=============================================== Flexbox types ===============================================*/

import React from "react"

import {
    SpacersTypes,
    FlexDirectionTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
} from "../../utils/common-types"

export interface FlexboxProps extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    flexDirection?: FlexDirectionTypes
    flexWrap?: FlexWrapTypes
    alignContent?: FlexAlignContentTypes
    justifyContent?: FlexJustifyContentTypes
    alignItems?: FlexAlignItemsTypes
    justifyItems?: FlexJustifyItemsTypes
    gap?: SpacersTypes | number | string
    rowGap?: SpacersTypes | number | string
    columnGap?: SpacersTypes | number | string
    padding?: SpacersTypes | number | string
}
