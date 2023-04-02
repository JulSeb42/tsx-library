/*=============================================== SrOnly component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { SrOnlyProps } from "./types"

const SrOnly = forwardRef(
    (
        { as, children, ...rest }: SrOnlyProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledSrOnly ref={ref} as={as} {...rest}>
            {children}
        </Styles.StyledSrOnly>
    )
)

export default SrOnly
