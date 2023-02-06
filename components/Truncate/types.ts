/*=============================================== Truncate types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../types"

export interface TruncateProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    gap?: SpacersTypes
}
