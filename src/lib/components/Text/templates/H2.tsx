/*=============================================== H2 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH2 } from "../styles"

const H2 = forwardRef(
    (
        { as, children, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH2
                ref={ref}
                as={as}
                style={{
                    ["--text-h2-font-size" as any]: display
                        ? FontSizes.Display.H2
                        : FontSizes.Titles.H2,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledH2>
        )
    }
)

export default H2
