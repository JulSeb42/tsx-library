/*=============================================== Sticky types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../utils/common-types"

export interface StickyProps extends React.HTMLAttributes<HTMLDivElement> {
    top?: SpacersTypes | number
    as?: React.ElementType
}
