/*=============================================== InputContainer types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface InputContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    helper?: string
    helperBottom?:
        | string
        | {
              text: string
              icon?: string
              iconColor?: LibColorsTypes | ColorsShortTypes | string
          }
    counter?: boolean
    maxLength?: number
    value?: any
    id: string
}
