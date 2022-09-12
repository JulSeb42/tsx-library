/*=============================================== Sticky ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { StickyProps } from "./types"

const Sticky = forwardRef(
    (
        { children, top = "s", as, ...props }: StickyProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledSticky $top={top} as={as} ref={ref} {...props}>
                {children}
            </Styles.StyledSticky>
        )
    }
)

export default Sticky
