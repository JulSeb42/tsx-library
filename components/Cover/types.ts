/*=============================================== Cover types ===============================================*/

import React from "react"

import { SpacersTypes, AllColorsTypes } from "../../types"

enum align {
    center,
    bottom,
}

export type CoverAlignTypes = keyof typeof align

export interface CoverProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    src: string
    alt: string
    overlay?: "black" | "white" | "gradient-black" | "gradient-white"
    align?: CoverAlignTypes
    height?: number | string
    gap?: SpacersTypes
    textColor?: AllColorsTypes
}
