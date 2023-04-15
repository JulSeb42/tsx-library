/*=============================================== H4 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH4 } from "../styles"

const H4 = forwardRef(
    (
        { as, children, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH4
                ref={ref}
                as={as}
                style={{
                    ["--text-h4-font-size" as any]: display
                        ? FontSizes.Display.H4
                        : FontSizes.Titles.H4,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledH4>
        )
    }
)

export default H4
