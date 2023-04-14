/*=============================================== H2 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH2, MaxLinesMixin } from "../styles"

const H2 = forwardRef(
    (
        { as, children, maxLines, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <H2MaxLines
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--font-size" as any]: display
                        ? FontSizes.Display.H2
                        : FontSizes.Titles.H2,
                }}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </H2MaxLines>
        )
    }
)

const H2MaxLines = styled(StyledH2)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default H2
