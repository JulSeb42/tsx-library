/*=============================================== Main component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { MainProps } from "./types"

const Main = forwardRef(
    (
        {
            as,
            gap = "l",
            position = 1,
            alignContent = "start",
            alignItems = "start",
            justifyContent = "start",
            justifyItems = "start",
            size = "default",
            contentSize = "default",
            children,
            paddingTopBottom = "xxl",
            ...rest
        }: MainProps,
        ref?: React.ForwardedRef<HTMLDivElement>
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
            {...rest}
        >
            {children}
        </Styles.StyledMain>
    )
)

export default Main
