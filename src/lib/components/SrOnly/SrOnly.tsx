/*=============================================== SrOnly component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledSrOnly } from "./styles"
import type { SrOnlyProps } from "./types"

const SrOnly = forwardRef(
    (
        { as, children, ...rest }: SrOnlyProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledSrOnly ref={ref} as={as} {...rest}>
            {children}
        </StyledSrOnly>
    )
)

export default SrOnly
