/*=============================================== CloseIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import { StyledIcon } from "./styles"
import { IconProps } from "./type"

/*==================== Component ====================*/

const CloseIcon = ({
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
            d="M16.192 6.344L11.949 10.586L7.707 6.344L6.293 7.758L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.758L16.192 6.344Z"
            fill="currentColor"
        />
    </StyledIcon>
)

export default CloseIcon
