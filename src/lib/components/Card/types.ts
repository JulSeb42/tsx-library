/*=============================================== Card types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    RadiusesTypes,
    AllColorsTypes,
    ShadowsTypes,
    BoxShadowProps,
    PaddingTypes,
    CursorTypes,
    BorderStylesTypes,
    ButtonLinkType,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

export type CardProps = HTMLAttributes<HTMLDivElement> &
    FlexboxProps &
    ButtonLinkType & {
        as?: ElementType
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
        padding?: PaddingTypes
        cursor?: CursorTypes
        width?: string | number
        height?: string | number
        shadow?: ShadowsTypes | BoxShadowProps
        backgroundColor?: AllColorsTypes
        textColor?: AllColorsTypes
        to?: string
    }
