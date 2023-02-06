/*=============================================== Select component ===============================================*/

import React, { useRef, useState } from "react"

import { uuid, useClickOutside } from "../../"
import { ListInputs, ListItem, Chevron } from "../ListInputs"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import { SelectProps } from "./types"

const Select = ({
    as,
    id,
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
    inputVariant = "rounded",
    ...rest
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const el = useRef<HTMLDivElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const selectItem = (value: string) => {
        setSelected(value)
        setIsOpen(false)
    }

    const itemsFn = () =>
        items?.map((item, i) => (
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

    const listProps = {
        isOpen: isOpen,
        accentColor: accentColor,
        backgroundColor: backgroundColor,
        direction: listDirection,
    }

    const listFn = () =>
        listVariant === "shadow" ? (
            <ListInputs
                {...listProps}
                variant={listVariant}
                shadow={listShadow}
            >
                {itemsFn()}
            </ListInputs>
        ) : (
            <ListInputs {...listProps} variant={listVariant}>
                {itemsFn()}
            </ListInputs>
        )

    const content = () => (
        <Styles.StyledSelect
            $isOpen={isOpen}
            $isEmpty={!items}
            disabled={disabled}
            onClick={!disabled ? () => setIsOpen(!isOpen) : undefined}
            id={id}
            ref={el}
            as={as}
            {...rest}
        >
            <Styles.Selected
                $isOpen={items && isOpen}
                $accentColor={accentColor}
                $disabled={disabled}
                $backgroundColor={backgroundColor}
                $variant={inputVariant}
            >
                {selected}

                {items && (
                    <Chevron
                        icon={
                            icon && typeof icon === "object" ? icon.name : icon
                        }
                        isOpen={isOpen}
                        color={accentColor}
                    />
                )}
            </Styles.Selected>

            {listFn()}
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
