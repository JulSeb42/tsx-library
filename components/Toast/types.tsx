/*=============================================== Toast types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children?: string | React.ReactNode

    icon?: {
        name: string
        color?: LibColorsTypes | ColorsShortTypes | string
    }

    close?:
        | boolean
        | {
              icon: string
          }
}
