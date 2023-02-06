/*=============================================== Main types ===============================================*/

import React from "react"

import {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
} from "../../types"

enum mainSizes {
    default,
    large,
    form,
    full,
}

export type MainSizeTypes = keyof typeof mainSizes | number

const mainPositions = {
    1: 1,
    2: 2,
} as const

export type MainPositionTypes = keyof typeof mainPositions

interface BaseMainProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    gap?: SpacersTypes
    position?: MainPositionTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    paddingTopBottom?: SpacersTypes
}

interface MainSize1 extends BaseMainProps {
    size?: "default" | "large" | "form" | number
    contentSize?: never
}

interface MainSize2 extends BaseMainProps {
    size?: "full"
    contentSize?: "default" | "large" | "form" | number
}

export type MainProps = MainSize1 | MainSize2
