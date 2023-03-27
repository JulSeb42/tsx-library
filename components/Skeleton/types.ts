/*=============================================== Skeleton types ===============================================*/

import React from "react"

import { AllColorsTypes, RadiusesTypes } from "../../types"

enum animations {
    pulse,
    shine,
}

export type SkeletonAnimationTypes = keyof typeof animations

export interface SkeletonPropsBase
    extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    width?: string | number
    height?: string | number
    aspectRatio?: string
    backgroundColor?: AllColorsTypes
    borderRadius?: RadiusesTypes
    flex?: string | number
    flexGrow?: string | number
}

interface SkeletonAnimation1 extends SkeletonPropsBase {
    animation?: "pulse"
    shineOpacity?: never
    shineColor?: never
    shineSpeed?: never
    shineWidth?: never
}

interface SkeletonAnimation2 extends SkeletonPropsBase {
    animation?: "shine"
    shineOpacity?: number
    shineColor?: AllColorsTypes
    shineSpeed?: number
    shineWidth?: string | number
}

export type SkeletonProps = SkeletonAnimation1 | SkeletonAnimation2

export interface ShineProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    speed?: number
    opacity?: number
    color?: AllColorsTypes
    width?: string | number
}
