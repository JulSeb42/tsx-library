/*=============================================== Aside component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

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
            ...rest
        }: AsideProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledAside
            ref={ref}
            as={as}
            $gap={gap}
            $position={position}
            $alignContent={alignContent}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $justifyItems={justifyItems}
            $size={size}
            $paddingTopBottom={paddingTopBottom}
            $minHeight={minHeight}
            {...rest}
        >
            {children}
        </Styles.StyledAside>
    )
)

export default Aside
