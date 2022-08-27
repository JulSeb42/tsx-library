/*=============================================== Loader types ===============================================*/

import React from "react"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

export interface LoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
    options?: {
        size?: number
        borderSize?: number
        color?: ColorsShortTypes | LibColorsTypes | string
        speed?: number
    }
}
