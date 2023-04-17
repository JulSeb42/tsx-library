/*=============================================== Wrapper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import * as Styles from "./styles"
import type { WrapperProps } from "./types"

const Wrapper = forwardRef(
    (
        {
            as,
            template = "1col",
            children,
            style,
            className,
            ...rest
        }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledWrapper
            ref={ref}
            as={as}
            className={classNames(
                { "one-col": template === "1col" },
                { "two-cols": template === "2cols" },
                { "three-cols": template === "3cols" },
                className
            )}
            {...rest}
        >
            {children}
        </Styles.StyledWrapper>
    )
)

export default Wrapper
