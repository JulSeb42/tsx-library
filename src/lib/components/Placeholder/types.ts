/*=============================================== Placeholder types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    AllColorsTypes,
    OverlayTypes,
    ShadowsTypes,
    RadiusesTypes,
    FontSizeTypes,
    FontWeightTypes,
    PaddingTypes,
} from "../../types"

interface PlaceholderBaseProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    width?: string | number
    height?: string | number
    aspectRatio?: string
    background?: AllColorsTypes | OverlayTypes
    shadow?: ShadowsTypes
    borderRadius?: RadiusesTypes
    padding?: PaddingTypes
}

interface PlaceholderContent1 extends PlaceholderBaseProps {
    fontSize?: FontSizeTypes
    customFontSize?: string | number
    fontWeight?: FontWeightTypes
    textColor?: AllColorsTypes
}

interface PlaceholderContent2 extends PlaceholderBaseProps {
    children?: undefined
    fontSize?: never
    customFontSize?: never
    fontWeight?: never
    textColor?: never
}

export type PlaceholderProps = PlaceholderContent1 | PlaceholderContent2