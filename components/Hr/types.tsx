/*=============================================== Hr types ===============================================*/

import React from "react"

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"

export interface HrProps extends React.HTMLAttributes<HTMLHRElement> {
    color?: AllColorsTypes
    height?: number
    width?: number | string
    margin?:
        | number
        | SpacersTypes
        | "0 auto"
        | "auto"
        | {
              left?: number | SpacersTypes
              top?: number | SpacersTypes
              right?: number | SpacersTypes
              bottom?: number | SpacersTypes
          }
}
