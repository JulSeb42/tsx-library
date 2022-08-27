/*=============================================== ChevronLeftIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { IconProps } from "./type"

/*==================== Component ====================*/

const ChevronLeftIcon = ({
    size = 64,
    color = "currentColor",
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14.1465 6.293L8.4395 12L14.1465 17.707L15.5605 16.293L11.2675 12L15.5605 7.707L14.1465 6.293Z"
            fill={getColor(color)}
        />
    </svg>
)

export default ChevronLeftIcon
