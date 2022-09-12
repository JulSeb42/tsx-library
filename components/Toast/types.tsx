/*=============================================== Toast types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children?: string | React.ReactNode

    icon?:
        | string
        | {
              name: string
              color?: AllColorsTypes
          }

    close?: boolean | string
}
