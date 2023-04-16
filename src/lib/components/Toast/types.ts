/*=============================================== Toast types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { AllColorsTypes } from "../../types"

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    title: string
    maxWidth?: number | string
    icon?:
        | string
        | {
              name: string
              color?: AllColorsTypes
              size?: number
          }
    close?: boolean | string
    labelClose?: string
}
