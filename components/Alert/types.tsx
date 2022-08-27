/*=============================================== Alert types ===============================================*/

import React from "react"

import { ColorsShortTypes } from "../../utils/common-types"

export interface AlertProps extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: ColorsShortTypes
    children: string | React.ReactNode | React.ReactNode[]
    isModal?: boolean
}
