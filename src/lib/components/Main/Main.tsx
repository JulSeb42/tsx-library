/*=============================================== Main component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx, variableSpacer } from "../../"
import { getMainSize } from "./get-main-size"
import { getMainContentSize } from "./get-main-content-size"

import * as Styles from "./styles"
import type { MainProps } from "./types"

const Main = forwardRef(
    (
        {
            as,
            gap = "l",
            position = 1,
            alignContent = "start",
            alignItems = "start",
            justifyContent = "stretch",
            justifyItems = "start",
            size = "default",
            contentSize = "default",
            children,
            paddingTopBottom = "xxl",
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
                    ...style,
                    ["--main-min-height" as any]: stringifyPx(minHeight),
                    ["--main-gap" as any]: variableSpacer(gap),
                    ["--main-padding" as any]: variableSpacer(paddingTopBottom),
                    ["--main-size" as any]: getMainSize(size),
                    ["--main-position" as any]: position,
                    ["--main-align-content" as any]: alignContent,
                    ["--main-align-items" as any]: alignItems,
                    ["--main-justify-content" as any]: justifyContent,
                    ["--main-justify-items" as any]: justifyItems,
                    ["--main-content-size" as any]:
                        getMainContentSize(contentSize),
                }}
                $size={size}
                $contentSize={contentSize}
                {...rest}
            >
                {children}
            </Styles.StyledMain>
        )
    }
)

export default Main
