/*=============================================== H5 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import type { TextProps } from "../types"
import { StyledH5 } from "../styles"

const H5 = forwardRef(
    (
        { as, children, display, style, className, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH5
                ref={ref}
                as={as}
                className={classNames({ display }, className)}
                {...rest}
            >
                {children}
            </StyledH5>
        )
    }
)

export default H5
