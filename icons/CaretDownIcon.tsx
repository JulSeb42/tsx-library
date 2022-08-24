/*=============================================== CaretDownIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { LibColorsTypes, ColorsShortTypes } from "../common-types"

/*==================== Component ====================*/

const CaretDownIcon = ({
    size = 64,
    color = "currentColor",
    ...props
}: Props) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.998 17L18.998 9H4.99799L11.998 17Z"
            fill={getColor(color)}
        />
    </svg>
)

export default CaretDownIcon

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}
