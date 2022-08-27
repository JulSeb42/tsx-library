/*=============================================== InputImage types ===============================================*/

import React from "react"

import {
    ValidationTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

export interface InputImageProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    disabled?: boolean
    validation?: ValidationTypes
    width?: number | string
    height?: number | string
    value?: never

    img: {
        src: string
        alt?: string
    }

    options?: {
        label?: string
        helper?: string
        helperBottom?:
            | string
            | {
                  text: string
                  icon?: string
                  iconColor?: LibColorsTypes | ColorsShortTypes | string
              }
    }

    icons?: {
        empty?: string
        hover?: string
    }
}
