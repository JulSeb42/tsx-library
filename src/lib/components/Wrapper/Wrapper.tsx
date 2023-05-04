/*=============================================== Wrapper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledWrapper } from "./styles"
import type { WrapperProps } from "./types"

const Wrapper = forwardRef(
    (
        { as, children, style, ...rest }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledWrapper ref={ref} as={as} {...rest}>
            {children}
        </StyledWrapper>
    )
)

export default Wrapper
