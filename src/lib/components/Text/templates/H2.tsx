/*=============================================== H2 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import type { TextProps } from "../types"
import { StyledH2 } from "../styles"

const H2 = forwardRef(
    (
        { as, children, display, style, className, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH2
                ref={ref}
                as={as}
                className={classNames({ display }, className)}
                {...rest}
            >
                {children}
            </StyledH2>
        )
    }
)

export default H2
