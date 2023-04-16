/*=============================================== ProgressBar types ===============================================*/

import type { ElementType, MeterHTMLAttributes } from "react"

import type { ColorsHoverTypes } from "../../types"

export interface ProgressBarProps
    extends MeterHTMLAttributes<HTMLMeterElement> {
    as?: ElementType
    value: number
    color?: ColorsHoverTypes
    animated?: boolean
}
