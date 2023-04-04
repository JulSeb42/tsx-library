/*=============================================== Lib icons types ===============================================*/

import type { HTMLAttributes } from "react"
import type { AllColorsTypes } from "../types"

export interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: AllColorsTypes
}
