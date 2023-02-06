/*=============================================== Main component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { MainProps } from "./types"

const Main = forwardRef(
    (
        {
            as,
            gap,
            position,
            alignContent,
            alignItems,
            justifyContent,
            justifyItems,
            size,
            contentSize,
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
