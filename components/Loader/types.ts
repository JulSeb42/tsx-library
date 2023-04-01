/*=============================================== Loader types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // AllColorsTypes
    AllColorsTypes,
} from "../../types"

const variants = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
} as const

export type LoaderVariantTypes = keyof typeof variants

interface LoaderBaseProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    size?: number
    color?: AllColorsTypes
    children?: never
}

interface LoaderStyle1 extends LoaderBaseProps {
    variant?: 1 | 2 | 3
    borderWidth?: number
    speed?: number
}

interface LoaderStyle2 extends LoaderBaseProps {
    variant?: 4
    borderWidth?: never | null
    speed?: never | null
}

export type LoaderProps = LoaderStyle1 | LoaderStyle2
