/*=============================================== H4 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import { FontSizes } from "../../../"

import type { TextProps } from "../types"
import { StyledH4, MaxLinesMixin } from "../styles"

const H4 = forwardRef(
    (
        { as, children, maxLines, display, style, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <H4MaxLines
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--font-size" as any]: display
                        ? FontSizes.Display.H4
                        : FontSizes.Titles.H4,
                }}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </H4MaxLines>
        )
    }
)

const H4MaxLines = styled(StyledH4)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default H4
