/*=============================================== Dropdown component ===============================================*/

import React, { forwardRef, useRef } from "react"

import { useClickOutside } from "../../"

import * as Styles from "./styles"
import { DropdownProps, DropdownContainerProps } from "./types"

export const DropdownContainer = forwardRef(
    (
        { as, children, justify = "left", ...rest }: DropdownContainerProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.DropdownContainer
            ref={ref}
            as={as}
            $justify={justify}
            {...rest}
        >
            {children}
        </Styles.DropdownContainer>
    )
)

export const Dropdown = ({
    as,
    isOpen,
    setIsOpen,
    accentColor = "primary",
    direction = "down",
    children,
    ...rest
}: DropdownProps) => {
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    return (
        <Styles.StyledDropdown
            ref={el}
            as={as}
            $isOpen={isOpen}
            $accentColor={accentColor}
            $direction={direction}
            {...rest}
        >
            {children}
        </Styles.StyledDropdown>
    )
}