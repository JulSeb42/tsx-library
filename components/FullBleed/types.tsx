/*=============================================== FullBleed types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../utils/common-types"

export interface FullBleedProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
    padding?:
        | SpacersTypes
        | number
        | {
              left?: SpacersTypes | number
              top?: SpacersTypes | number
              right?: SpacersTypes | number
              bottom?: SpacersTypes | number
          }
    height?: number | string
    aspectRatio?: string
    as?: React.ElementType
}
