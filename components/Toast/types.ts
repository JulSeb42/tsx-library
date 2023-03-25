/*=============================================== Toast types ===============================================*/

import React from "react"

import {
    ShadowsTypes,
    AllColorsTypes,
    ObjectPositionTypes,
    RadiusesTypes,
    FontSizeTypes,
    PaddingTypes,
    FontWeightTypes,
} from "../../types"

enum tags {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    small,
}

type PossibleToastTags = keyof typeof tags

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    title: string
    titleSize?: FontSizeTypes
    titleTag?: PossibleToastTags
    titleWeight?: FontWeightTypes
    titleAs?: React.ElementType
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
