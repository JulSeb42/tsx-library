/*=============================================== Wrapper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { getWrapperTemplate } from "./get-wrapper-template"

import * as Styles from "./styles"
import type { WrapperProps } from "./types"

const Wrapper = forwardRef(
    (
        { as, template = "1col", children, style, ...rest }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledWrapper
            ref={ref}
            as={as}
            style={{
                ["--wrapper-template" as any]: getWrapperTemplate(template),
                ...style,
            }}
            {...rest}
        >
            {children}
        </Styles.StyledWrapper>
    )
)

export default Wrapper
