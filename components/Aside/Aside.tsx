/*=============================================== Aside component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import { AsideProps } from "./types"

const Aside = forwardRef(
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
            children,
            paddingTopBottom = "xxl",
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
            {...rest}
        >
            {children}
        </Styles.StyledAside>
    )
)

export default Aside
