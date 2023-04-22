/*=============================================== SeparatorIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import classNames from "classnames"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"
import { stringifyPx } from "../"

/*==================== Component ====================*/

export const SeparatorIcon = ({
    size = 64,
    color = "currentColor",
    style,
    onClick,
    className,
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
                d="M3 11H6V13H3V11ZM8 11H11V13H8V11ZM13 11H16V13H13V11ZM18 11H21V13H18V11Z"
                fill={color}
            />
        </StyledIcon>
    )
}
