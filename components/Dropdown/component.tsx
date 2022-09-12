/*=============================================== Dropdown ===============================================*/

import React, { forwardRef, useRef } from "react"

import { useClickOutside } from "../../hooks"

import * as Styles from "./styles"
import { DropdownContainerProps, DropdownProps } from "./types"

const DropdownContainer = forwardRef(
    (
        { justify = "left", children, ...props }: DropdownContainerProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledDropdownContainer $justify={justify} ref={ref} {...props}>
            {children}
        </Styles.StyledDropdownContainer>
    )
)

const Dropdown = ({
    children,
    isOpen,
    accentColor = "primary",
    setIsOpen,
    direction = "down",
    ...props
}: DropdownProps) => {
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    return (
        <Styles.StyledDropdown
            $isOpen={isOpen}
            ref={el}
            $accentColor={accentColor}
            $direction={direction}
            {...props}
        >
            {children}
        </Styles.StyledDropdown>
    )
}

export { DropdownContainer, Dropdown }
