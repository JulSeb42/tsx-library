/*=============================================== H1 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH1 } from "../styles"

const H1 = forwardRef(
    (
        { as, children, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH1
                ref={ref}
                as={as}
                style={{
                    ["--text-h1-font-size" as any]: display
                        ? FontSizes.Display.H1
                        : FontSizes.Titles.H1,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledH1>
        )
    }
)

export default H1
