/*=============================================== LoaderThree ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "../styles"
import { LoaderProps } from "../types"

const LoaderThree = forwardRef(
    (
        {
            as,
            size = 48,
            color = "primary",
            borderWidth = 8,
            speed = 1200,
            ...rest
        }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.StyledLoaderThree
            ref={ref}
            as={as}
            $size={size}
            $color={color}
            $borderWidth={borderWidth}
            $speed={speed}
            {...rest}
        >
            <span />
            <span />
            <span />
            <span />
        </Styles.StyledLoaderThree>
    )
)

export default LoaderThree
