/*=============================================== Card types ===============================================*/

import React from "react"

import {
    RadiusesTypes,
    AllColorsTypes,
    ShadowsTypes,
    BoxShadowProps,
    PaddingTypes,
    CursorTypes,
    BorderStylesTypes,
} from "../../types"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    borderColor?: AllColorsTypes
    borderWidth?: number
    borderStyle?:
        | BorderStylesTypes
        | {
              left?: BorderStylesTypes
              top?: BorderStylesTypes
              right?: BorderStylesTypes
              bottom?: BorderStylesTypes
          }
    borderRadius?: RadiusesTypes
    padding?: PaddingTypes
    cursor?: CursorTypes
    width?: string | number
    height?: string | number
    shadow?: ShadowsTypes | BoxShadowProps
    to?: string
    backgroundColor?: AllColorsTypes
    textColor?: AllColorsTypes
}
