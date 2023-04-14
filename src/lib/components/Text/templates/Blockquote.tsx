/*=============================================== Blockquote component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledBlockquote } from "../styles"

const Blockquote = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLQuoteElement>
    ) => {
        return (
            <StyledBlockquote ref={ref} as={as} {...rest}>
                {children}
            </StyledBlockquote>
        )
    }
)

export default Blockquote
