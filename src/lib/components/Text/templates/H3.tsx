/*=============================================== H3 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import type { TextProps } from "../types"
import { StyledH3 } from "../styles"

const H3 = forwardRef(
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
            <StyledH3
                ref={ref}
                as={as}
                className={classNames({ display }, className)}
                data-align={textAlign}
                {...rest}
            >
                {children}
            </StyledH3>
        )
    }
)

export default H3
