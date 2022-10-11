/*=============================================== Rating types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"
import { InputContainerProps } from "../InputContainer/types"

interface BaseProps
    extends React.HTMLAttributes<HTMLDivElement>,
        InputContainerProps {
    rating: number
    id: string
    children?: never
    accentColor?: ColorsHoverTypes
    icons?: {
        default: string
        checked: string
    }
}

interface Possible1 extends BaseProps {
    setRating: (rating: number) => void
    readOnly?: never
}

interface Possible2 extends BaseProps {
    setRating?: never
    readOnly: true
}

export type RatingProps = Possible1 | Possible2
