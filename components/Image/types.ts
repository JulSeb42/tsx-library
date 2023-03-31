/*=============================================== Image types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { RadiusesTypes, ObjectFitTypes } from "../../types"

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    as?: ElementType
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
              asContainer?: ElementType
          }
}
