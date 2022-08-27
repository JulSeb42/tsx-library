/*=============================================== Aside types ===============================================*/

import React from "react"

import {
    GridJustifyContentTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyItemsTypes,
    SpacersTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

const sizes = {
    default: "default",
    small: "small",
} as const

export type SizeTypes = keyof typeof sizes

const positions = {
    1: 1,
    2: 2,
    3: 3,
} as const

export type PositionsTypes = keyof typeof positions

/*==================== Component types ====================*/

export interface AsideProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizeTypes | number
    position?: PositionsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    gap?: SpacersTypes | number
}
