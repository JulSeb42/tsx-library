/*=============================================== P component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledP } from "../styles"

const P = forwardRef(
    (
        { as, children, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledP ref={ref} as={as} data-align={textAlign} {...rest}>
                {children}
            </StyledP>
        )
    }
)

export default P
