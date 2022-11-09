/*=============================================== Toast types ===============================================*/

import React from "react"

import { AllColorsTypes, ShadowsTypes } from "../../utils/common-types"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children?: string | React.ReactNode
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
}
