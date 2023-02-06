/*=============================================== Icon types ===============================================*/

import React from "react"
import { Props as SVGProps } from "react-inlinesvg"

import { AllColorsTypes } from "../../types"

export interface IconProps extends SVGProps {
    as?: React.ElementType
    src: string
    size?: number
    color?: AllColorsTypes
}
