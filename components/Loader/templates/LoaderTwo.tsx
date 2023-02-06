/*=============================================== LoaderTwo ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "../styles"
import { LoaderProps } from "../types"

const LoaderTwo = forwardRef(
    (
        {
            as,
            size = 48,
            color = "primary",
            borderWidth = 8,
            speed = 1200,
            ...rest
        }: LoaderProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.StyledLoaderTwo
            ref={ref}
            as={as}
            $size={size}
            $color={color}
            $borderWidth={borderWidth}
            $speed={speed}
            {...rest}
        />
    )
)

export default LoaderTwo
