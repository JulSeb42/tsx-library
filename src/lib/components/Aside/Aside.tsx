/*=============================================== Aside component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableSpacer, stringifyPx } from "../../"
import { getAsidePosition } from "./get-aside-position"
import { getAsideSize } from "./get-aside-size"

import * as Styles from "./styles"
import type { AsideProps } from "./types"

const Aside = forwardRef(
    (
        {
            as,
            gap = "l",
            position = 1,
            alignContent = "flex-start",
            alignItems = "flex-start",
            justifyContent = "flex-start",
            justifyItems = "flex-start",
            size = "default",
            children,
            paddingTopBottom = "xxl",
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
                    ["--aside-align-content" as any]: alignContent,
                    ["--aside-align-items" as any]: alignItems,
                    ["--aside-justify-content" as any]: justifyContent,
                    ["--aside-justify-items" as any]: justifyItems,
                    ["--aside-gap" as any]: variableSpacer(gap),
                    ["--aside-padding" as any]:
                        variableSpacer(paddingTopBottom),
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
