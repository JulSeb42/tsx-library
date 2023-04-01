/*=============================================== ItalicIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

/*==================== Component ====================*/

export const ItalicIcon = ({
    size = 64,
    color = "currentColor",
    ...rest
}: IconProps) => {
    return (
        <StyledIcon
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M19 7V4H9V7H11.868L9.012 17H5V20H15V17H12.132L14.988 7H19Z"
                fill={color}
            />
        </StyledIcon>
    )
}
