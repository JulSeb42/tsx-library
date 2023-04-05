/*=============================================== Main component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

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
            ...rest
        }: MainProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledMain
            ref={ref}
            as={as}
            $gap={gap}
            $position={position}
            $alignContent={alignContent}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $justifyItems={justifyItems}
            $size={size}
            $contentSize={contentSize}
            $paddingTopBottom={paddingTopBottom}
            $minHeight={minHeight}
            {...rest}
        >
            {children}
        </Styles.StyledMain>
    )
)

export default Main
