/*=============================================== ArrowUpIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import { StyledIcon } from "./styles"
import { IconProps } from "./type"

/*==================== Component ====================*/

const ArrowUpIcon = ({
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
        <path
            d="M11 8.414V18H13V8.414L17.293 12.707L18.707 11.293L12 4.586L5.29303 11.293L6.70703 12.707L11 8.414Z"
            fill="currentColor"
        />
    </StyledIcon>
)

export default ArrowUpIcon
