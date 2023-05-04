/*=============================================== Card types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type {
    BorderTypes,
    ButtonLinkTypes,
    PaddingTypes,
    RadiusesTypes,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

export type CardProps = HTMLAttributes<HTMLDivElement> &
    FlexboxProps &
    ButtonLinkTypes & {
        as?: ElementType
        border?: BorderTypes
        borderRadius?: RadiusesTypes
        padding?: PaddingTypes
        width?: string | number
        height?: string | number
        maxWidth?: string | number
        backgroundImg?: string | null
    }
