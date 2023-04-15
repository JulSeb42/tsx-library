/*=============================================== Avatar types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { AllColorsTypes, RadiusesTypes } from "../../types"

interface AvatarPropsBase extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    size?: number
    borderRadius?: RadiusesTypes
}

interface AvatarPropsContent1 extends AvatarPropsBase {
    img: string
    alt?: string
    letter?: never
    icon?: never
    iconSize?: never
    color?: never
    contentColor?: never
}

interface AvatarPropsContent2 extends AvatarPropsBase {
    img?: never
    alt?: never
    letter: string
    icon?: never
    iconSize?: never
    color?: AllColorsTypes
    contentColor?: AllColorsTypes
}

interface AvatarPropsContent3 extends AvatarPropsBase {
    img?: never
    alt?: never
    letter?: never
    icon: string
    iconSize?: number
    color?: AllColorsTypes
    contentColor?: AllColorsTypes
}

export type AvatarProps =
    | AvatarPropsContent1
    | AvatarPropsContent2
    | AvatarPropsContent3
