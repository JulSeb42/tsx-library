/*=============================================== Aside component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"
import { getAsidePosition } from "./get-aside-position"
import { getAsideSize } from "./get-aside-size"

import * as Styles from "./styles"
import type { AsideProps } from "./types"

const Aside = forwardRef(
    (
        {
            as,
            position = 1,
            size = "default",
            children,
            minHeight = "100vh",
            style,
            ...rest
        }: AsideProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledAside
                ref={ref}
                as={as}
                style={{
                    ...style,
                    ["--aside-size" as any]: getAsideSize(size),
                    ["--aside-min-height" as any]: stringifyPx(minHeight),
                    ["--aside-position" as any]: getAsidePosition(position),
                }}
                {...rest}
            >
                {children}
            </Styles.StyledAside>
        )
    }
)

export default Aside
