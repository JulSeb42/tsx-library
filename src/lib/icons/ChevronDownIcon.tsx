/*=============================================== ChevronDownIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import classNames from "classnames"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"
import { stringifyPx } from "../"

/*==================== Component ====================*/

export const ChevronDownIcon = ({
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
            d="M16.293 8.4395L12 12.7325L7.707 8.4395L6.293 9.8535L12 15.5605L17.707 9.8535L16.293 8.4395Z"
            fill="currentColor"
        />
    </StyledIcon>
)
