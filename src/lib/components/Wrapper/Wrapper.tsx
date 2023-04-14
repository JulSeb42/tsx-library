/*=============================================== Wrapper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableSpacer } from "../../"
import { getWrapperTemplate } from "./get-wrapper-template"

import * as Styles from "./styles"
import type { WrapperProps } from "./types"

const Wrapper = forwardRef(
    (
        {
            as,
            template = "1col",
            gap = "l",
            children,
            style,
            ...rest
        }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledWrapper
            ref={ref}
            as={as}
            style={{
                ...style,
                "--wrapper-template": getWrapperTemplate(template),
                "--wrapper-gap": variableSpacer(gap),
            }}
            {...rest}
        >
            {children}
        </Styles.StyledWrapper>
    )
)

export default Wrapper
