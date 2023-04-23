/*=============================================== Icon component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

const Icon = forwardRef(
    (
        { src, size = 16, color = "currentColor", style, ...rest }: IconProps,
        ref?: ForwardedRef<any>
    ) => (
        <StyledIcon
            ref={ref}
            src={`/icons/${src}.svg`}
            style={{
                ["--icon-size" as any]: stringifyPx(size),
                ...style,
            }}
            $color={color}
            {...rest}
        />
    )
)

export default Icon
