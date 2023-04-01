/*=============================================== Skeleton types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    AllColorsTypes,
    RadiusesTypes,
    BorderStylesTypes,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

enum animations {
    pulse,
    shine,
}

export type SkeletonAnimationTypes = keyof typeof animations

export interface SkeletonPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
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

export interface ShineProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    speed?: number
    opacity?: number
    color?: AllColorsTypes
    width?: string | number
}

export interface SkeletonCardProps
    extends HTMLAttributes<HTMLDivElement>,
        FlexboxProps {
    borderColor?: AllColorsTypes
    borderWidth?: number
    borderStyle?:
        | BorderStylesTypes
        | {
              left?: BorderStylesTypes
              top?: BorderStylesTypes
              right?: BorderStylesTypes
              bottom?: BorderStylesTypes
          }
    borderRadius?: RadiusesTypes
    width?: string | number
    height?: string | number
    backgroundColor?: AllColorsTypes
}
