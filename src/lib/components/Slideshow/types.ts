/*=============================================== Slideshow types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"

import type { ColorsHoverTypes } from "../../types"

const buttonPositions = { left: "left", right: "right" } as const

export type ButtonPositionsTypes = keyof typeof buttonPositions

const buttonVariants = {
    dots: "dots",
    "dots-outline": "dots-outline",
    bars: "bars",
} as const

export type ButtonVariantTypes = keyof typeof buttonVariants

export interface SlideshowButtonProps
    extends HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    iconNext?: string
    isPrev?: boolean
    isNext?: boolean
    position: ButtonPositionsTypes
    hideTouch?: boolean
    isLarge?: boolean
    color?: ColorsHoverTypes
}

interface SlideshowPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: ReactNode[]
    activeSlide?: number
    height?: string | number
    controls?:
        | boolean
        | {
              type: "small" | "large"
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
              iconPrev?: string
              iconNext?: string
          }
    options?: {
        autoplay?: number
        speed?: number
    }
}

type SlideshowPagination1 = SlideshowPropsBase & {
    pagination?:
        | boolean
        | {
              variant?: "dots" | "dots-outline" | "bars"
              position?: "inside" | "outside"
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
          }
    thumbnails?: never
}

type SlideshowPagination2 = SlideshowPropsBase & {
    pagination?: never
    thumbnails?: string[]
}

export type SlideshowProps = SlideshowPagination1 | SlideshowPagination2
