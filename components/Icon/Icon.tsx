/*=============================================== Icon component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { IconProps } from "./types"

const Icon = forwardRef(
    (
        { as, src, size = 16, color = "currentColor", ...rest }: IconProps,
        ref?: React.ForwardedRef<HTMLOrSVGElement>
    ) => (
        <Styles.StyledIcon
            ref={ref}
            as={as}
            src={`/icons/${src}.svg`}
            $size={size}
            $color={color}
            {...rest}
        />
    )
)

export default Icon
