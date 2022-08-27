/*=============================================== Dropdown ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { DropdownContainerProps, DropdownProps } from "./types"

const DropdownContainer = forwardRef(
    (
        { justify = "left", children, ...props }: DropdownContainerProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledDropdownContainer
            $justify={justify}
            justifyContent={justify === "right" ? "flex-end" : "flex-start"}
            ref={ref}
            {...props}
        >
            {children}
        </Styles.StyledDropdownContainer>
    )
)

const Dropdown = forwardRef(
    (
        { children, isOpen, ...props }: DropdownProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledDropdown $isOpen={isOpen} ref={ref} {...props}>
            {children}
        </Styles.StyledDropdown>
    )
)

export { DropdownContainer, Dropdown }
