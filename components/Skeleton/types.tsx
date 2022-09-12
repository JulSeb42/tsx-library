/*=============================================== Skeleton types ===============================================*/

import React from "react"

import { AllColorsTypes, RadiusesTypes } from "../../utils/common-types"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number | string
    height?: number | string
    aspectRatio?: string
    backgroundColor?: AllColorsTypes
    borderRadius?: RadiusesTypes
}
