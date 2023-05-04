/*=============================================== Aside component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"
import { getAsideSize } from "./get-aside-size"

import { StyledAside } from "./styles"
import type { AsideProps } from "./types"

const Aside = forwardRef(
    (
        {
            as,
            size = "default",
            children,
            minHeight,
            style,
            ...rest
        }: AsideProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledAside
                ref={ref}
                as={as}
                style={{
                    ["--aside-size" as any]: getAsideSize(size),
                    ["--aside-min-height" as any]:
                        minHeight && stringifyPx(minHeight),
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledAside>
        )
    }
)

export default Aside
