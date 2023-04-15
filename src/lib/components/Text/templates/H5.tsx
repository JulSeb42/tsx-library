/*=============================================== H5 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH5 } from "../styles"

const H5 = forwardRef(
    (
        { as, children, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH5
                ref={ref}
                as={as}
                style={{
                    ["--text-h5-font-size" as any]: display
                        ? FontSizes.Display.H5
                        : FontSizes.Titles.H5,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledH5>
        )
    }
)

export default H5
