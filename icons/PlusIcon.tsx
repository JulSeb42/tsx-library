/*=============================================== PlusIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { IconProps } from "./type"

/*==================== Component ====================*/

const PlusIcon = ({
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
            d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z"
            fill={getColor(color)}
        />
    </svg>
)

export default PlusIcon
