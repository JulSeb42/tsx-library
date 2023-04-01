/*=============================================== Hr types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { SpacersTypes, AllColorsTypes } from "../../types"

export interface HrProps extends HTMLAttributes<HTMLHRElement> {
    as?: ElementType
    width?: string | number
    height?: number
    color?: AllColorsTypes
    margin?:
        | SpacersTypes
        | "0 auto"
        | "auto"
        | {
              left?: SpacersTypes
              top?: SpacersTypes
              right?: SpacersTypes
              bottom?: SpacersTypes
          }
    rounded?: boolean
}
