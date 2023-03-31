/*=============================================== Main types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    SpacersTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
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

interface BaseMainProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    gap?: SpacersTypes
    position?: MainPositionTypes
    alignContent?: FlexAlignContentTypes
    alignItems?: FlexAlignItemsTypes
    justifyContent?: FlexJustifyContentTypes
    justifyItems?: FlexJustifyItemsTypes
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
