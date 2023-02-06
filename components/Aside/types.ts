/*=============================================== Aside types ===============================================*/

import React from "react"

import {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
} from "../../types"

enum asideSizes {
    default,
    small,
}

export type AsideSizeTypes = keyof typeof asideSizes | number

const asidePositions = {
    1: 1,
    2: 2,
    3: 3,
} as const

export type AsidePositionTypes = keyof typeof asidePositions

export interface AsideProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    gap?: SpacersTypes
    position?: AsidePositionTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    size?: AsideSizeTypes
    paddingTopBottom?: SpacersTypes
}
