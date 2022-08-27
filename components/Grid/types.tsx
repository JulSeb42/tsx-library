/*=============================================== Grid types ===============================================*/

import React from "react"

import {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

const col = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
} as const

export type ColType = keyof typeof col

/*==================== Component Types ====================*/

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    col?: ColType | number | string
    gap?: SpacersTypes | number | string
    columnGap?: SpacersTypes | number | string
    rowGap?: SpacersTypes | number | string
    justifyItems?: GridJustifyItemsTypes
    alignItems?: GridAlignItemsTypes
    justifyContent?: GridJustifyContentTypes
    alignContent?: GridAlignContentTypes
    padding?: SpacersTypes | number | string
    colTablet?: string
    colMobile?: string
}
