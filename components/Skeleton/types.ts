/*=============================================== Skeleton types ===============================================*/

import React from "react"

import { AllColorsTypes, RadiusesTypes } from "../../types"

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    width?: string | number
    height?: string | number
    aspectRatio?: string
    backgroundColor?: AllColorsTypes
    borderRadius?: RadiusesTypes
    animation?: boolean
}

export interface ShineProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    speed?: number
}
