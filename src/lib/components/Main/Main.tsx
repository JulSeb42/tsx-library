/*=============================================== Main component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

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
            minHeight,
            style,
            className,
            ...rest
        }: MainProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledMain
                ref={ref}
                as={as}
                style={{
                    ["--main-min-height" as any]:
                        minHeight && stringifyPx(minHeight),
                    ["--main-size" as any]: getMainSize(size),
                    ["--main-content-size" as any]:
                        getMainContentSize(contentSize),
                    ...style,
                }}
                className={classNames(
                    { "position-one": position === 1 },
                    { "position-two": position === 2 },
                    { full: size === "full" },
                    className
                )}
                {...rest}
            >
                {children}
            </Styles.StyledMain>
        )
    }
)

export default Main
