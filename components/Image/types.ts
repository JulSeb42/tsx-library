/*=============================================== Image types ===============================================*/

import React from "react"

import { RadiusesTypes, ObjectFitTypes } from "../../types"

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    as?: React.ElementType
    src: string
    alt: string
    width?: number | string
    height?: number | string
    borderRadius?: RadiusesTypes
    fit?: ObjectFitTypes
    caption?:
        | string
        | {
              text: string
              background?: "black" | "white"
          }
}
