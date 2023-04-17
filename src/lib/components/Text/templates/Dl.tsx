/*=============================================== Dl component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledDl } from "../styles"

const Dl = forwardRef(
    (
        { as, children, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLDListElement>
    ) => {
        return (
            <StyledDl ref={ref} as={as} data-align={textAlign} {...rest}>
                {children}
            </StyledDl>
        )
    }
)

export default Dl
