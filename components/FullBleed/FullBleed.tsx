/*=============================================== FullBleed component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { FullBleedProps } from "./types"

const FullBleed = forwardRef(
    (
        { as, children, height, aspectRatio, padding, ...rest }: FullBleedProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledFullBleed
            ref={ref}
            as={as}
            $padding={padding}
            $height={height}
            $aspectRatio={aspectRatio}
            {...rest}
        >
            {children}
        </Styles.StyledFullBleed>
    )
)

export default FullBleed
