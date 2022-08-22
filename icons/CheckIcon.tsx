/*=============================================== CheckIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { LibColorsTypes, ColorsShortTypes } from "../common-types"

/*==================== Component ====================*/

const CheckIcon = ({ size = 64, color = "currentColor" }: Props) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.707L18.293 7.293L10 15.586Z"
            fill={getColor(color)}
        />
    </svg>
)

export default CheckIcon

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}
