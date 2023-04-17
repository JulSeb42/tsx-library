/*=============================================== Ul component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledUl } from "../styles"

const Ul = forwardRef(
    (
        { as, children, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLUListElement>
    ) => {
        return (
            <StyledUl ref={ref} as={as} data-align={textAlign} {...rest}>
                {children}
            </StyledUl>
        )
    }
)

export default Ul
