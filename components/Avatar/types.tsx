/*=============================================== Avatar types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

type AvatarImg = {
    src: string
    alt?: string
}

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
              outline?: number
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
}

interface Possible1 extends BaseProps {
    content: {
        img: AvatarImg
        letter?: never
        icon?: never
    }
}

interface Possible2 extends BaseProps {
    content: {
        img?: never
        letter: string
        icon?: never
    }
}

interface Possible3 extends BaseProps {
    content: {
        img?: never
        letter?: never
        icon: string
    }
}

export type AvatarProps = Possible1 | Possible2 | Possible3
