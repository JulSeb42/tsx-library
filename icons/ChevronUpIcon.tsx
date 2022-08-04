/*=============================================== ChevronUpIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { LibColorsTypes, ColorsShortTypes } from "../components/common-types"

/*==================== Component ====================*/

const ChevronUpIcon = ({ size = 64, color = "currentColor" }: Props) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.293 14.1465L7.707 15.5605L12 11.2675L16.293 15.5605L17.707 14.1465L12 8.4395L6.293 14.1465Z"
            fill={getColor(color)}
        />
    </svg>
)

export default ChevronUpIcon

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}
