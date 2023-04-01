/*=============================================== ProgressBar types ===============================================*/

import type { MeterHTMLAttributes, ElementType } from "react"

import {
    // AllColorsTypes, SpacersTypes
    AllColorsTypes,
    SpacersTypes,
} from "../../types"

enum directions {
    horizontal,
    vertical,
}

export type ProgressDirectionType = keyof typeof directions

export interface ProgressBarPropsBase
    extends MeterHTMLAttributes<HTMLMeterElement> {
    as?: ElementType
    value: number
    color?: AllColorsTypes
    backgroundColor?: AllColorsTypes
    width?: string | SpacersTypes
    height?: string | SpacersTypes
    direction?: ProgressDirectionType
}

interface ProgressBarAnimation1 extends ProgressBarPropsBase {
    animated?: true
    speed?: number
}

interface ProgressBarAnimation2 extends ProgressBarPropsBase {
    animated?: false
    speed?: never
}

export type ProgressBarProps = ProgressBarAnimation1 | ProgressBarAnimation2
