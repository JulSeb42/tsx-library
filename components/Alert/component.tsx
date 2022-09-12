/*=============================================== Alert component ===============================================*/

import React from "react"

import Text from "../Text"

import * as Styles from "./styles"
import { AlertProps } from "./types"

const Alert = ({
    color = "primary",
    children,
    isModal,
    as,
    ...props
}: AlertProps) => (
    <Styles.StyledAlert
        $color={color}
        as={as ? as : typeof children === "string" ? Text : "div"}
        $isModal={isModal}
        {...props}
    >
        {children}
    </Styles.StyledAlert>
)

export default Alert
