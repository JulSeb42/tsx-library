/*=============================================== Toast types ===============================================*/

import React from "react"

import {
    ShadowsTypes,
    AllColorsTypes,
    ObjectPositionTypes,
    RadiusesTypes,
} from "../../types"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    title: string
    maxWidth?: number
    shadow?: ShadowsTypes
    icon?:
        | string
        | {
              name: string
              color?: AllColorsTypes
          }
    close?: boolean | string
    labelClose?: string
    position?: ObjectPositionTypes
    borderRadius?: RadiusesTypes
    border?: {
        width?: number
        color?: AllColorsTypes
    }
}
