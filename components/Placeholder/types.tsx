/*=============================================== Placeholder types ===============================================*/

import React from "react"

import {
    AllColorsTypes,
    OverlayTypes,
    RadiusesTypes,
    ShadowsTypes,
} from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number
    height?: string | number
    aspectRatio?: string
    background?: AllColorsTypes | OverlayTypes
    shadow?: ShadowsTypes
    borderRadius?: RadiusesTypes | number
    as?: React.ElementType
}

interface Possible1 extends BaseProps {
    children?: string
    textColor?: AllColorsTypes
}

interface Possible2 extends BaseProps {
    children?: never
    textColor?: never
}

export type PlaceholderProps = Possible1 | Possible2
