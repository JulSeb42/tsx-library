/*=============================================== H1 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import type { TextProps } from "../types"
import { StyledH1 } from "../styles"

const H1 = forwardRef(
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
            <StyledH1
                ref={ref}
                as={as}
                className={classNames({ display }, className)}
                data-align={textAlign}
                {...rest}
            >
                {children}
            </StyledH1>
        )
    }
)

export default H1
