/*=============================================== ProgressBar types ===============================================*/

import React from "react"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

export interface ProgressBarProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    value: number

    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        backgroundColor?: ColorsShortTypes | LibColorsTypes | string
        animated?: boolean
    }
}
