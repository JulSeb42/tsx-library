/*=============================================== H6 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledH6 } from "../styles"

const H6 = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH6 ref={ref} as={as} {...rest}>
                {children}
            </StyledH6>
        )
    }
)

export default H6
