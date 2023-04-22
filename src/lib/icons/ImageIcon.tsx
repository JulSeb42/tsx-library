/*=============================================== ImageIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import classNames from "classnames"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"
import { stringifyPx } from "../"

/*==================== Component ====================*/

export const ImageIcon = ({
    size = 64,
    color = "currentColor",
    style,
    onClick,
    className,
    ...rest
}: IconProps) => (
    <StyledIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            ["--icon-size" as any]: stringifyPx(size),
            ...style,
        }}
        className={classNames({ "is-clickable": !!onClick }, className)}
        onClick={onClick}
        $color={color}
        {...rest}
    >
        <path
            d="M7.499 11C8.32743 11 8.999 10.3284 8.999 9.5C8.999 8.67157 8.32743 8 7.499 8C6.67057 8 5.999 8.67157 5.999 9.5C5.999 10.3284 6.67057 11 7.499 11Z"
            fill="currentColor"
        />
        <path
            d="M10.499 14L8.999 12L5.999 16H17.999L13.499 10L10.499 14Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.999 4H19.999C21.102 4 21.999 4.897 21.999 6V18C21.999 19.103 21.102 20 19.999 20H3.999C2.896 20 1.999 19.103 1.999 18V6C1.999 4.897 2.896 4 3.999 4ZM3.999 6V18H20.001L19.999 6H3.999Z"
            fill="currentColor"
        />
    </StyledIcon>
)
