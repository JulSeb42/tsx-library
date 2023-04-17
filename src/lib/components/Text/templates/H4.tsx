/*=============================================== H4 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import type { TextProps } from "../types"
import { StyledH4 } from "../styles"

const H4 = forwardRef(
    (
        {
            as,
            children,
            display,
            style,
            className,
            textAlign,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH4
                ref={ref}
                as={as}
                className={classNames({ display }, className)}
                data-align={textAlign}
                {...rest}
            >
                {children}
            </StyledH4>
        )
    }
)

export default H4
