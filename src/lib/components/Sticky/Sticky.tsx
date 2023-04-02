/*=============================================== Sticky component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { StickyProps } from "./types"

const Sticky = forwardRef(
    (
        { as, top = "s", children, ...rest }: StickyProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledSticky ref={ref} as={as} $top={top} {...rest}>
            {children}
        </Styles.StyledSticky>
    )
)

export default Sticky