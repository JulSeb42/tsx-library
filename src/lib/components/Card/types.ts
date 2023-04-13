/*=============================================== Card types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    RadiusesTypes,
    AllColorsTypes,
    ShadowsTypes,
    BoxShadowProps,
    PaddingTypes,
    CursorTypes,
    ButtonLinkTypes,
    BorderTypes,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

export type BackgroundImgType = {
    img: string
    clip?: "border-box" | "padding-box" | "content-box" | "text"
    origin?: "border-box" | "padding-box" | "content-box"
    position?: "top" | "bottom" | "left" | "right" | "center"
    repeat?:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat"
    size?: "cover" | "contain"
}

export type CardProps = HTMLAttributes<HTMLDivElement> &
    FlexboxProps &
    ButtonLinkTypes & {
        as?: ElementType
        border?: BorderTypes
        borderRadius?: RadiusesTypes
        padding?: PaddingTypes
        cursor?: CursorTypes
        width?: string | number
        height?: string | number
        shadow?: ShadowsTypes | BoxShadowProps
        backgroundColor?: AllColorsTypes
        backgroundImg?: string | BackgroundImgType
        textColor?: AllColorsTypes
        to?: string
    }
