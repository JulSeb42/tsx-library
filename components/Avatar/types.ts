/*=============================================== Avatar types ===============================================*/

import React from "react"

import { AllColorsTypes, RadiusesTypes } from "../../types"

interface AvatarPropsBase extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    size?: number
    border?:
        | boolean
        | {
              width?: number
              color?: AllColorsTypes
          }
    badge?:
        | boolean
        | number
        | {
              content?: number
              color?: AllColorsTypes
              contentColor?: AllColorsTypes
              position?: "top" | "bottom"
          }
    borderRadius?: RadiusesTypes
}

interface AvatarPropsContent1 extends AvatarPropsBase {
    img: string
    alt?: string
    letter?: never
    icon?: never
    color?: never
    contentColor?: never
}

interface AvatarPropsContent2 extends AvatarPropsBase {
    img?: never
    alt?: never
    letter: string
    icon?: never
    color?: AllColorsTypes
    contentColor?: AllColorsTypes
}

interface AvatarPropsContent3 extends AvatarPropsBase {
    img?: never
    alt?: never
    letter?: never
    icon?: string
    color?: AllColorsTypes
    contentColor?: AllColorsTypes
}

export type AvatarProps =
    | AvatarPropsContent1
    | AvatarPropsContent2
    | AvatarPropsContent3