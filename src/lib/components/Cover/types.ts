/*=============================================== Cover types ===============================================*/

import type { ElementType } from "react"
import type { FlexboxProps } from "../Flexbox/types"

const overlays = {
    black: "black",
    white: "white",
    "gradient-black": "gradient-black",
    "gradient-white": "gradient-white",
    none: "none",
} as const

export type CoverOverlaysTypes = keyof typeof overlays

export interface CoverProps extends FlexboxProps {
    as?: ElementType
    src: string
    alt: string
    overlay?: CoverOverlaysTypes
    height?: number | string
}
