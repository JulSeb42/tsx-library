/*=============================================== FullBleed component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx, variableAllPaddings } from "../../"

import { StyledFullBleed } from "./styles"
import type { FullBleedProps } from "./types"

const FullBleed = forwardRef(
    (
        {
            as,
            children,
            height,
            aspectRatio,
            padding = null,
            style,
            ...rest
        }: FullBleedProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledFullBleed
                ref={ref}
                as={as}
                style={{
                    ...variableAllPaddings(padding, "full-bleed"),
                    ["--full-bleed-aspect-ratio" as any]: aspectRatio,
                    ["--full-bleed-height" as any]:
                        height && stringifyPx(height),
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledFullBleed>
        )
    }
)

export default FullBleed
