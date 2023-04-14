/*=============================================== H5 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH5, MaxLinesMixin } from "../styles"

const H5 = forwardRef(
    (
        { as, children, maxLines, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <H5MaxLines
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--font-size" as any]: display
                        ? FontSizes.Display.H5
                        : FontSizes.Titles.H5,
                }}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </H5MaxLines>
        )
    }
)

const H5MaxLines = styled(StyledH5)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default H5
