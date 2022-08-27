/*=============================================== Cover types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const align = {
    center: "center",
    bottom: "bottom",
} as const

export type AlignTypes = keyof typeof align

/*==================== Component Types ====================*/

export interface CoverProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string
    alt: string
    children: React.ReactNode | React.ReactNode[]

    options?: {
        overlay?: "black" | "white" | "gradient-black" | "gradient-white"
        align?: AlignTypes
        height?: number | string
        gap?: SpacersTypes | string | number
    }
}
