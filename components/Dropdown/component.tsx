/*=============================================== Dropdown ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { DropdownContainerProps, DropdownProps } from "./types"

const DropdownContainer = ({
    justify = "left",
    children,
    ...props
}: DropdownContainerProps) => (
    <Styles.StyledDropdownContainer
        $justify={justify}
        justifyContent={justify === "right" ? "flex-end" : "flex-start"}
        {...props}
    >
        {children}
    </Styles.StyledDropdownContainer>
)

const Dropdown = ({ children, isOpen, ...props }: DropdownProps) => (
    <Styles.StyledDropdown $isOpen={isOpen} {...props}>
        {children}
    </Styles.StyledDropdown>
)

export { DropdownContainer, Dropdown }
