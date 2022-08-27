/*=============================================== CalendarIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import getColor from "./getColor"

import { IconProps } from "./type"

/*==================== Component ====================*/

const CalendarIcon = ({
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
        <path d="M9 11H7V13H9V11Z" fill={getColor(color)} />
        <path d="M9 15H7V17H9V15Z" fill={getColor(color)} />
        <path d="M13 11H11V13H13V11Z" fill={getColor(color)} />
        <path d="M13 15H11V17H13V15Z" fill={getColor(color)} />
        <path d="M17 11H15V13H17V11Z" fill={getColor(color)} />
        <path d="M17 15H15V17H17V15Z" fill={getColor(color)} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22ZM19.001 20L19 8H5V20H19.001Z"
            fill={getColor(color)}
        />
    </svg>
)

export default CalendarIcon
