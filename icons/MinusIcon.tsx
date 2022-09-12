/*=============================================== CalendarIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import { StyledIcon } from "./styles"
import { IconProps } from "./type"

/*==================== Component ====================*/

const MinusIcon = ({
    size = 64,
    color = "currentColor",
    ...props
}: IconProps) => (
    <StyledIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        $size={size}
        $color={color}
        {...props}
    >
        <path d="M5 11H19V13H5V11Z" fill="currentColor" />
    </StyledIcon>
)

export default MinusIcon
