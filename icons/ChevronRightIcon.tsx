/*=============================================== ChevronRightIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { IconProps } from "./type"

/*==================== Component ====================*/

const ChevronRightIcon = ({
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
            d="M9.8535 17.707L15.5605 12L9.8535 6.293L8.4395 7.707L12.7325 12L8.4395 16.293L9.8535 17.707Z"
            fill={getColor(color)}
        />
    </svg>
)

export default ChevronRightIcon
