/*=============================================== Hr types ===============================================*/

import React from "react"

import { SpacersTypes, AllColorsTypes } from "../../types"

export interface HrProps extends React.HTMLAttributes<HTMLHRElement> {
    as?: React.ElementType
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
}
