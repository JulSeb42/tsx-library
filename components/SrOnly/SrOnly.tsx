/*=============================================== SrOnly component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { SrOnlyProps } from "./types"

const SrOnly = forwardRef(
    (
        { as, children, ...rest }: SrOnlyProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledSrOnly ref={ref} as={as} {...rest}>
            {children}
        </Styles.StyledSrOnly>
    )
)

export default SrOnly
