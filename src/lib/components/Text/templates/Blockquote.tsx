/*=============================================== Blockquote component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledBlockquote } from "../styles"

const Blockquote = forwardRef(
    (
        { as, children, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLQuoteElement>
    ) => {
        return (
            <StyledBlockquote
                ref={ref}
                as={as}
                data-align={textAlign}
                {...rest}
            >
                {children}
            </StyledBlockquote>
        )
    }
)

export default Blockquote
