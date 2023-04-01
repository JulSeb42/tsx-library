/*=============================================== Alert component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Text } from "../../"

import * as Styles from "./styles"
import { AlertProps } from "./types"

const Alert = forwardRef(
    (
        { as, color = "primary", children, isModal, ...rest }: AlertProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledAlert
            ref={ref}
            as={as ? as : typeof children === "string" ? Text : "div"}
            $color={color}
            $isModal={isModal}
            {...rest}
        >
            {children}
        </Styles.StyledAlert>
    )
)

export default Alert
