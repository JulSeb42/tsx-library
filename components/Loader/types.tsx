/*=============================================== Loader types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

const LoaderVariants = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
} as const

export type LoaderVariantsTypes = keyof typeof LoaderVariants

export interface LoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number
    borderSize?: number
    speed?: number
    color?: AllColorsTypes
    variant?: LoaderVariantsTypes
}
