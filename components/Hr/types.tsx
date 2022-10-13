/*=============================================== Hr types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

export interface HrProps extends React.HTMLAttributes<HTMLHRElement> {
    color?: AllColorsTypes
    height?: number
    width?: number | string
}
