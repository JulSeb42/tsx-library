/*=============================================== Autocomplete component ===============================================*/

import React, { useState, forwardRef } from "react"
import { slugify } from "ts-utils-julseb"

import BaseInput from "../InputContainer"
import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../InputComponents"
import { ListInputs, ListItem } from "../ListInputs"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { AutocompleteProps } from "./types"

const Autocomplete = forwardRef(
    (
        {
            id,
            disabled,
            items,
            value,
            setValue,
            autoFocus,
            icon,
            emptyText = "No result.",
            label,
            helper,
            helperBottom,
            validation,
            accentColor = "primary",
            backgroundColor,
            listVariant,
            listShadow,
            listDirection,
            ...props
        }: AutocompleteProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const [isOpen, setIsOpen] = useState(false)
        const handleOpen = () => setIsOpen(true)
        const handleClose = () => setTimeout(() => setIsOpen(false), 100)

        // Handles
        const [filteredValues, setFilteredValues] = useState("")

        const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
            setFilteredValues(e.target.value)
        }

        const results = items
            .sort()
            .filter(item => slugify(item).includes(slugify(filteredValues)))
        const handleClick = (e: any) => setValue(e.target.innerText)

        // Component functions

        const listItemsFunction = () =>
            results.length > 0 ? (
                results.slice(0, 20).map(item => (
                    <ListItem
                        accentColor={accentColor}
                        validation={validation?.status}
                        backgroundColor={backgroundColor}
                        onClick={handleClick}
                        isActive={value === item && true}
                        key={uuid()}
                    >
                        {item}
                    </ListItem>
                ))
            ) : (
                <ListItem
                    accentColor={accentColor}
                    validation={validation?.status}
                    backgroundColor={backgroundColor}
                    readOnly
                >
                    {emptyText}
                </ListItem>
            )

        const listProps = {
            isOpen: isOpen,
            accentColor: accentColor,
            backgroundColor: backgroundColor,
            validation: validation?.status,
            direction: listDirection,
        }

        const listFunction = () =>
            listVariant === "bordered" ? (
                <ListInputs {...listProps} variant={listVariant}>
                    {listItemsFunction()}
                </ListInputs>
            ) : (
                <ListInputs
                    {...listProps}
                    variant={listVariant}
                    shadow={listShadow}
                >
                    {listItemsFunction()}
                </ListInputs>
            )

        const inputFunction = () => (
            <Styles.InputContainer>
                {icon && (
                    <IconComponent
                        accentColor={accentColor}
                        disabled={disabled}
                        icon={icon}
                        validation={validation?.status}
                    />
                )}

                <Styles.StyledInput
                    id={id}
                    onFocus={!disabled ? handleOpen : undefined}
                    onBlur={!disabled ? handleClose : undefined}
                    type="text"
                    $hasIcon={!!icon}
                    value={value}
                    autoFocus={autoFocus}
                    $validation={validation?.status}
                    ref={ref}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    onChange={handleFilter}
                    {...props}
                />

                {validation && (
                    <RightContainer disabled={disabled}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}

                {listFunction()}
            </Styles.InputContainer>
        )

        return label || helper || helperBottom ? (
            <BaseInput
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {inputFunction()}
            </BaseInput>
        ) : (
            inputFunction()
        )
    }
)

export default Autocomplete
