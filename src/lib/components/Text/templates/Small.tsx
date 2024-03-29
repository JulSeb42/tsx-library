/*=============================================== Small component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledSmall } from "../styles"

const Small = forwardRef(
    (
        { as, children, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledSmall ref={ref} as={as} data-align={textAlign} {...rest}>
                {children}
            </StyledSmall>
        )
    }
)

export default Small
