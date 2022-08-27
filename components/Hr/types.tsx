/*=============================================== Hr types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface HrProps extends React.HTMLAttributes<HTMLHRElement> {
    color?: LibColorsTypes | ColorsShortTypes | string
    height?: number
}
