/*=============================================== ClipboardIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import classNames from "classnames"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"
import { stringifyPx } from "../"

/*==================== Component ====================*/

export const ClipboardIcon = ({
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
            d="M19 3H16.75C16.75 2.73478 16.6446 2.48043 16.4571 2.29289C16.2696 2.10536 16.0152 2 15.75 2H8.25C7.98478 2 7.73043 2.10536 7.54289 2.29289C7.35536 2.48043 7.25 2.73478 7.25 3H5C3.897 3 3 3.897 3 5V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3ZM19 20H5V5H7V7H17V5H19V20Z"
            fill="currentColor"
        />
    </StyledIcon>
)
