/*=============================================== Avatar types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

type AvatarImg = {
    src: string
    alt?: string
}

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    options?: {
        size?: number
        color?: LibColorsTypes | ColorsShortTypes | string
        contentColor?: LibColorsTypes | ColorsShortTypes | string
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
