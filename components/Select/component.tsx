/*=============================================== Select ===============================================*/

import React, { useRef } from "react"
import { uuid } from "../../utils/utils"

import InputContainer from "../InputContainer"
import { Chevron, ListInputs, ListItem } from "../ListInputs"

import useClickOutside from "../../hooks/useClickOutside"

import * as Styles from "./styles"
import { SelectProps } from "./types"

const Select = ({
    id,
    isOpen,
    setIsOpen,
    disabled,
    selected,
    setSelected,
    label,
    helper,
    helperBottom,
    icon,
    accentColor = "primary",
    items,
    backgroundColor,
    listVariant,
    listShadow,
    listDirection,
    ...props
}: SelectProps) => {
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const selectItem = (value: string) => {
        setSelected(value)
        setIsOpen(false)
    }

    const listProps = {
        isOpen: isOpen,
        accentColor: accentColor,
        backgroundColor: backgroundColor,
        direction: listDirection,
    }

    const itemsfunction = () =>
        items?.map(item => (
            <ListItem
                isActive={selected === item && true}
                onClick={() => selectItem(item)}
                accentColor={accentColor}
                backgroundColor={backgroundColor}
                key={uuid()}
            >
                {item}
            </ListItem>
        ))

    const listFunction = () =>
        listVariant === "shadow" ? (
            <ListInputs
                {...listProps}
                variant={listVariant}
                shadow={listShadow}
            >
                {itemsfunction()}
            </ListInputs>
        ) : (
            <ListInputs {...listProps} variant={listVariant}>
                {itemsfunction()}
            </ListInputs>
        )

    const content = () => (
        <Styles.StyledSelect
            $isOpen={isOpen}
            $isEmpty={!items}
            disabled={disabled}
            onClick={!disabled ? () => setIsOpen(!isOpen) : ""}
            id={id}
            ref={el}
            {...props}
        >
            <Styles.Selected
                $isOpen={items && isOpen}
                $accentColor={accentColor}
                $disabled={disabled}
                $backgroundColor={backgroundColor}
            >
                {selected}

                {items && (
                    <Chevron
                        icon={
                            icon && typeof icon === "object"
                                ? icon.name
                                : icon
                                ? icon
                                : undefined
                        }
                        isOpen={isOpen}
                        color={accentColor}
                    />
                )}
            </Styles.Selected>

            {listFunction()}
        </Styles.StyledSelect>
    )

    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            accentColor={accentColor}
        >
            {content()}
        </InputContainer>
    ) : (
        content()
    )
}

export default Select
