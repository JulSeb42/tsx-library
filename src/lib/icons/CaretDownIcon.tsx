/*=============================================== CaretDownIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import classNames from "classnames"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"
import { stringifyPx } from "../"

/*==================== Component ====================*/

export const CaretDownIcon = ({
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
        <path d="M11.998 17L18.998 9H4.99799L11.998 17Z" fill="currentColor" />
    </StyledIcon>
)
