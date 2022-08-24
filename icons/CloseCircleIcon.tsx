/*=============================================== CloseCircleIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { LibColorsTypes, ColorsShortTypes } from "../common-types"

/*==================== Component ====================*/

const CloseCircleIcon = ({
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
            d="M14.828 16.242L12 13.414L9.172 16.242L7.758 14.828L10.586 12L7.758 9.172L9.172 7.758L12 10.586L14.828 7.758L16.242 9.172L13.414 12L16.242 14.828L14.828 16.242Z"
            fill={getColor(color)}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12ZM20 12C20 7.589 16.411 4 12 4C7.589 4 4 7.589 4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12Z"
            fill={getColor(color)}
        />
    </svg>
)

export default CloseCircleIcon

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}
