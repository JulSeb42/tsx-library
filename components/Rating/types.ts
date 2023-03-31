/*=============================================== Rating types ===============================================*/

import type { HTMLAttributes } from "react"

import type { InputBaseProps } from "../InputContainer/types"

interface RatingPropsBase
    extends HTMLAttributes<HTMLDivElement>,
        InputBaseProps {
    rating: number
    icons?: {
        default: string | JSX.Element
        checked: string | JSX.Element
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
