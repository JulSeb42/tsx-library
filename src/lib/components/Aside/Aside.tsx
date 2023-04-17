/*=============================================== Aside component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { stringifyPx } from "../../"
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
            minHeight,
            style,
            className,
            ...rest
        }: AsideProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledAside
                ref={ref}
                as={as}
                className={classNames(
                    { "position-one": position === 1 },
                    { "position-two": position === 2 },
                    { "position-three": position === 3 },
                    className
                )}
                style={{
                    ["--aside-size" as any]: getAsideSize(size),
                    ["--aside-min-height" as any]:
                        minHeight && stringifyPx(minHeight),
                    ...style,
                }}
                {...rest}
            >
                {children}
            </Styles.StyledAside>
        )
    }
)

export default Aside
