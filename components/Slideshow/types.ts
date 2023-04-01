/*=============================================== Slideshow types ===============================================*/

import type { HTMLAttributes, ElementType, ReactNode } from "react"

import type {
    // ColorsHoverTypes,
    // RadiusesTypes,
    // ObjectFitTypes,
    ColorsHoverTypes,
    RadiusesTypes,
    ObjectFitTypes,
} from "../../types"

enum buttonPositions {
    left,
    right,
}

export type ButtonPositionsTypes = keyof typeof buttonPositions

export interface SlideshowButtonProps
    extends HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    iconNext?: string
    prev?: boolean
    next?: boolean
    position: ButtonPositionsTypes
    hideTouch?: boolean
    isLarge?: boolean
    color?: ColorsHoverTypes
}

interface SlideshowPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: ReactNode[]
    borderRadius?: RadiusesTypes
    imgFit?: ObjectFitTypes
    activeSlide?: number
    controls?:
        | boolean
        | {
              type: "small" | "large"
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
              iconPrev?: string
              iconNext?: string
          }
}

interface SlideshowHeight1 extends SlideshowPropsBase {
    height?: never
    aspectRatio?: string
}

interface SlideshowHeight2 extends SlideshowPropsBase {
    height?: string | number
    aspectRatio?: never
}

type SlideshowHeight = SlideshowHeight1 | SlideshowHeight2

type SlideshowPagination1 = SlideshowHeight & {
    pagination?:
        | boolean
        | {
              variant?: "dots" | "dots-outline" | "bars"
              position?: "inside" | "outside"
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
          }

    thumbnails?: never

    options?: {
        show?: never
        autoplay?: number
        speed?: number
    }
}

type SlideshowPagination2 = SlideshowHeight & {
    pagination?: never
    thumbnails?: string[]

    options?: {
        show?: never
        autoplay?: number
        speed?: number
    }
}

type SlideshowPagination3 = SlideshowHeight & {
    pagination?: never
    thumbnails?: never

    options?: {
        show?: number
        autoplay?: number
        speed?: number
    }
}

export type SlideshowProps =
    | SlideshowPagination1
    | SlideshowPagination2
    | SlideshowPagination3
