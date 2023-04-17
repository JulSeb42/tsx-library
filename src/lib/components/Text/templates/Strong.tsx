/*=============================================== Strong component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledStrong } from "../styles"

const Strong = forwardRef(
    (
        { as, children, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledStrong ref={ref} as={as} data-align={textAlign} {...rest}>
                {children}
            </StyledStrong>
        )
    }
)

export default Strong
