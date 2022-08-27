/*=============================================== Select ===============================================*/

import React, { useRef } from "react"

import InputContainer from "../InputContainer"
import Icon from "../Icon"
import ChevronDownIcon from "../../icons/ChevronDownIcon"

import useClickOutside from "../../hooks/useClickOutside"

import * as Styles from "./styles"
import { SelectProps, ItemProps } from "./types"

const Select = ({
    isOpen,
    setIsOpen,
    disabled,
    options,
    id,
    children,
    selected,
    ...props
}: SelectProps) => {
    const ref = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(ref, onClickOutside)

    const content = () => (
        <Styles.StyledSelect
            $isOpen={isOpen}
            $isEmpty={!children}
            disabled={disabled}
            onClick={!disabled ? () => setIsOpen(!isOpen) : ""}
            id={id}
            ref={ref}
            {...props}
        >
            <Styles.Selected>
                {selected}

                {children &&
                    (options?.icon ? (
                        <Icon src={options.icon} size={16} />
                    ) : (
                        <ChevronDownIcon size={16} />
                    ))}
            </Styles.Selected>

            <Styles.List $isOpen={isOpen}>{children}</Styles.List>
        </Styles.StyledSelect>
    )

    return options?.label || options?.helper || options?.helperBottom ? (
        <InputContainer
            id={id}
            label={options.label}
            helper={options.helper}
            helperBottom={options.helperBottom}
        >
            {content()}
        </InputContainer>
    ) : (
        content()
    )
}

const SelectItem = ({ children, onClick, isSelected }: ItemProps) => {
    return (
        <Styles.Item $isSelected={isSelected} onClick={onClick}>
            {children}
        </Styles.Item>
    )
}

export { Select, SelectItem }
