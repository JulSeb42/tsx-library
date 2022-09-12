/*=============================================== ChevronUpIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import { StyledIcon } from "./styles"
import { IconProps } from "./type"

/*==================== Component ====================*/

const ChevronUpIcon = ({
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
            d="M6.293 14.1465L7.707 15.5605L12 11.2675L16.293 15.5605L17.707 14.1465L12 8.4395L6.293 14.1465Z"
            fill="currentColor"
        />
    </StyledIcon>
)

export default ChevronUpIcon
