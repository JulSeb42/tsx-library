/*=============================================== Rating types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../types"
import { InputBaseProps } from "../InputContainer/types"

interface RatingPropsBase
    extends React.HTMLAttributes<HTMLDivElement>,
        InputBaseProps {
    rating: number
    accentColor?: ColorsHoverTypes
    icons?: {
        default: string
        checked: string
    }
}

interface RatingPropsBehaviour1 extends RatingPropsBase {
    setRating: (rating: number) => void
    readOnly?: never
}

interface RatingPropsBehaviour2 extends RatingPropsBase {
    setRating?: never
    readOnly: true
}

export type RatingProps = RatingPropsBehaviour1 | RatingPropsBehaviour2
