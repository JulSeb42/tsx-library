/*=============================================== Toast types ===============================================*/

import React from "react"

import {
    ShadowsTypes,
    AllColorsTypes,
    ObjectPositionTypes,
    RadiusesTypes,
    FontSizeTypes,
    PaddingTypes,
} from "../../types"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    title: string
    titleSize?: FontSizeTypes
    maxWidth?: number | string
    shadow?: ShadowsTypes
    icon?:
        | string
        | {
              name: string
              color?: AllColorsTypes
              size?: number
          }
    close?: boolean | string
    labelClose?: string
    position?: ObjectPositionTypes
    borderRadius?: RadiusesTypes
    border?: {
        width?: number
        color?: AllColorsTypes
    }
    padding?: PaddingTypes
}
