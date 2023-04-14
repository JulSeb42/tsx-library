/*=============================================== H3 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH3 } from "../styles"

const H3 = forwardRef(
    (
        { as, children, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH3
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--font-size" as any]: display
                        ? FontSizes.Display.H3
                        : FontSizes.Titles.H3,
                }}
                {...rest}
            >
                {children}
            </StyledH3>
        )
    }
)

export default H3
