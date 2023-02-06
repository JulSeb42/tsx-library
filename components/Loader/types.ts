/*=============================================== Loader types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../types"

const variants = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
} as const

export type LoaderVariantTypes = keyof typeof variants

interface LoaderBaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
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
