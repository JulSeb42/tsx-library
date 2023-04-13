/*=============================================== Toast types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    ShadowsTypes,
    AllColorsTypes,
    ObjectPositionTypes,
    RadiusesTypes,
    FontSizeTypes,
    PaddingTypes,
    FontWeightTypes,
    SpacersTypes,
    BorderTypes,
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

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    title: string
    titleSize?: FontSizeTypes
    titleTag?: PossibleToastTags
    titleWeight?: FontWeightTypes
    titleAs?: ElementType
    maxWidth?: number | string
    shadow?: ShadowsTypes
    icon?:
        | string
        | {
              name: string
              color?: AllColorsTypes
              size?: number
              gap?: SpacersTypes
          }
    close?: boolean | string
    labelClose?: string
    position?: ObjectPositionTypes
    borderRadius?: RadiusesTypes
    border?: BorderTypes
    padding?: PaddingTypes
}
