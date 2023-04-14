/*=============================================== H1 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH1, MaxLinesMixin } from "../styles"

const H1 = forwardRef(
    (
        { as, children, maxLines, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <H1MaxLines
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--font-size" as any]: display
                        ? FontSizes.Display.H1
                        : FontSizes.Titles.H1,
                }}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </H1MaxLines>
        )
    }
)

const H1MaxLines = styled(StyledH1)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default H1
