/*=============================================== P component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledP } from "../styles"

const P = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledP ref={ref} as={as} {...rest}>
                {children}
            </StyledP>
        )
    }
)

export default P
