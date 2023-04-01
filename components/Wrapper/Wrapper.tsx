/*=============================================== Wrapper component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import { WrapperProps } from "./types"

const Wrapper = forwardRef(
    (
        { as, template = "1col", gap = "l", children, ...rest }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledWrapper
            ref={ref}
            as={as}
            $template={template}
            $gap={gap}
            {...rest}
        >
            {children}
        </Styles.StyledWrapper>
    )
)

export default Wrapper
