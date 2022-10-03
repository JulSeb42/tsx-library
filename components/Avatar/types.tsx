/*=============================================== Avatar types ===============================================*/

import React from "react"

import { AllColorsTypes, RadiusesTypes } from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number
    color?: AllColorsTypes
    contentColor?: AllColorsTypes
    as?: React.ElementType
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

interface Possible1 extends BaseProps {
    img: string
    alt?: string
    letter?: never
    icon?: never
}

interface Possible2 extends BaseProps {
    img?: never
    alt?: never
    letter: string
    icon?: never
}

interface Possible3 extends BaseProps {
    img?: never
    alt?: never
    letter?: never
    icon: string
}

export type AvatarProps = Possible1 | Possible2 | Possible3
