/*=============================================== Em component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledEm } from "../styles"

const Em = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => (
        <StyledEm ref={ref} as={as} {...rest}>
            {children}
        </StyledEm>
    )
)

export default Em
