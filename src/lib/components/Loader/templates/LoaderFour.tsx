/*=============================================== LoaderFour ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "../styles"
import type { LoaderProps } from "../types"

const LoaderFour = forwardRef(
    (
        { as, size = 48, color = "primary", ...rest }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.StyledLoaderFour
            ref={ref}
            as={as}
            $size={size}
            $color={color}
            {...rest}
        >
            <span />
            <span />
            <span />
        </Styles.StyledLoaderFour>
    )
)

export default LoaderFour
