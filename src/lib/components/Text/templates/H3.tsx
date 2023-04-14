/*=============================================== H3 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH3, MaxLinesMixin } from "../styles"

const H3 = forwardRef(
    (
        { as, children, maxLines, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <H3MaxLines
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--font-size" as any]: display
                        ? FontSizes.Display.H3
                        : FontSizes.Titles.H3,
                }}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </H3MaxLines>
        )
    }
)

const H3MaxLines = styled(StyledH3)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default H3
