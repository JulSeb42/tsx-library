/*=============================================== Cover types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    SpacersTypes,
    AllColorsTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    TextAlignTypes,
    PaddingTypes,
} from "../../types"

export interface CoverProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType
    src: string
    alt: string
    overlay?: "black" | "white" | "gradient-black" | "gradient-white" | "none"
    height?: number | string
    textColor?: AllColorsTypes
    textAlign?: TextAlignTypes
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
