/*=============================================== FullBleed types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
    height?: number | string
    aspectRatio?: string
    as?: React.ElementType
}

interface Possible1 extends BaseProps {
    padding?:
        | SpacersTypes
        | number
        | {
              left?: SpacersTypes | number
              top?: SpacersTypes | number
              right?: SpacersTypes | number
              bottom?: SpacersTypes | number
          }
    paddingLeftRight?: never
    paddingTopBottom?: never
}

interface Possible2 extends BaseProps {
    padding?: never
    paddingLeftRight?: SpacersTypes | number
    paddingTopBottom?: SpacersTypes | number
}

export type FullBleedProps = Possible1 | Possible2
