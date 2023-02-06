/*=============================================== Aside component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { AsideProps } from "./types"

const Aside = forwardRef(
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
            children,
            paddingTopBottom = "xxl",
            ...rest
        }: AsideProps,
        ref?: React.ForwardedRef<HTMLDivElement>
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
            {...rest}
        >
            {children}
        </Styles.StyledAside>
    )
)

export default Aside
