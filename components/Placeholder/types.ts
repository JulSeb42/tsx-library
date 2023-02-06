/*=============================================== Placeholder types ===============================================*/

import React from "react"

import {
    AllColorsTypes,
    OverlayTypes,
    ShadowsTypes,
    RadiusesTypes,
    FontSizeTypes,
    FontWeightTypes,
} from "../../types"

interface PlaceholderBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    width?: string | number
    height?: string | number
    aspectRatio?: string
    background?: AllColorsTypes | OverlayTypes
    shadow?: ShadowsTypes
    borderRadius?: RadiusesTypes
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
