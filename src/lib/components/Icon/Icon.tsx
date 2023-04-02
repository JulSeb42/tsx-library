/*=============================================== Icon component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { IconProps } from "./types"

const Icon = forwardRef(
    (
        { src, size = 16, color = "currentColor", ...rest }: IconProps,
        ref?: ForwardedRef<any>
    ) => (
        <Styles.StyledIcon
            ref={ref}
            src={`/icons/${src}.svg`}
            $size={size}
            $color={color}
            {...rest}
        />
    )
)

export default Icon
