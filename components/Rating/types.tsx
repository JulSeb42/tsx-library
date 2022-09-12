/*=============================================== Rating types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"
import { InputContainerProps } from "../InputContainer/types"

export interface RatingProps
    extends React.HTMLAttributes<HTMLDivElement>,
        InputContainerProps {
    rating: number
    id: string
    children?: never
    setRating: (rating: number) => void
    accentColor?: ColorsHoverTypes
    icons?: {
        default: string
        checked: string
    }
}
