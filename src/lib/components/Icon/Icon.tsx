/*=============================================== Icon component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"

import * as Styles from "./styles"
import type { IconProps } from "./types"

const Icon = forwardRef(
    (
        { src, size = 16, color = "currentColor", style, ...rest }: IconProps,
        ref?: ForwardedRef<any>
    ) => (
        <Styles.StyledIcon
            ref={ref}
            src={`/icons/${src}.svg`}
            style={{
                ...style,
                ["--size" as any]: stringifyPx(size),
            }}
            $color={color}
            {...rest}
        />
    )
)

export default Icon
