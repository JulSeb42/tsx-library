/*=============================================== Skeleton types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { AllColorsTypes, RadiusesTypes, BorderTypes } from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

const animations = { pulse: "pulse", shine: "shine" } as const

export type SkeletonAnimationTypes = keyof typeof animations | null

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    width?: string | number
    height?: string | number
    backgroundColor?: AllColorsTypes
    borderRadius?: RadiusesTypes
    flex?: string | number
    flexGrow?: string | number
    animation?: SkeletonAnimationTypes
}

export interface ShineProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
}

export interface SkeletonCardProps
    extends HTMLAttributes<HTMLDivElement>,
        FlexboxProps {
    border?: BorderTypes
    borderRadius?: RadiusesTypes
    width?: string | number
    height?: string | number
    backgroundColor?: AllColorsTypes
    isShiny?: boolean
}
