/*=============================================== Main component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"
import { getMainSize } from "./get-main-size"
import { getMainContentSize } from "./get-main-content-size"

import * as Styles from "./styles"
import type { MainProps } from "./types"

const Main = forwardRef(
    (
        {
            as,
            position = 1,
            size = "default",
            contentSize = "default",
            children,
            minHeight = "100vh",
            style,
            ...rest
        }: MainProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledMain
                ref={ref}
                as={as}
                style={{
                    ["--main-min-height" as any]: stringifyPx(minHeight),
                    ["--main-size" as any]: getMainSize(size),
                    ["--main-position" as any]: position,
                    ["--main-content-size" as any]:
                        getMainContentSize(contentSize),
                    ...style,
                }}
                $size={size}
                {...rest}
            >
                {children}
            </Styles.StyledMain>
        )
    }
)

export default Main
