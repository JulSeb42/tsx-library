/*=============================================== Autocomplete component ===============================================*/

import { forwardRef, useState } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import Fuse from "fuse.js"

import { uuid, slugify, getHighlightedText } from "../../"
import { InputContainer } from "../InputContainer"
import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../InputComponents"
import { ListInputs, ListItem } from "../ListInputs"

import * as Styles from "./styles"
import type { AutocompleteProps } from "./types"

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
            iconSize,
            variant = "rounded",
            fuzzy = {
                options: {},
            },
            highlight = true,
            ...rest
        }: AutocompleteProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const [isOpen, setIsOpen] = useState(false)
        const handleOpen = () => setIsOpen(true)
        const handleClose = () => setTimeout(() => setIsOpen(false), 100)

        const [filteredValues, setFilteredValues] = useState("")

        const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
            setFilteredValues(e.target.value)
        }

        const results = items
            .sort()
            .filter(item => slugify(item).includes(slugify(filteredValues)))
        const handleClick = (e: any) => setValue(e.target.innerText)

        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        let fuzzyResults: any

        if (fuzzy) {
            const fuse = new Fuse(items, fuzzy.options)

            fuzzyResults = fuse.search(value)
        }

        const listItemsFn = () =>
            fuzzy ? (
                value && fuzzyResults.length > 0 ? (
                    <>
                        {fuzzyResults
                            .slice(0, 20)
                            .map((item: { item: string }) => {
                                const getItem = item.item

                                return (
                                    <ListItem
                                        accentColor={accentColor}
                                        validation={getValidationStatus}
                                        backgroundColor={backgroundColor}
                                        onClick={handleClick}
                                        isActive={value === getItem && true}
                                        key={uuid()}
                                    >
                                        {highlight
                                            ? getHighlightedText(getItem, value)
                                            : getItem}
                                    </ListItem>
                                )
                            })}

                        <ListItem
                            accentColor={accentColor}
                            validation={getValidationStatus}
                            backgroundColor={backgroundColor}
                            onClick={handleClick}
                        >
                            {highlight
                                ? getHighlightedText(value, value)
                                : value}
                        </ListItem>
                    </>
                ) : (
                    <ListItem
                        accentColor={accentColor}
                        validation={getValidationStatus}
                        backgroundColor={backgroundColor}
                        readOnly
                    >
                        {emptyText}
                    </ListItem>
                )
            ) : value && results.length > 0 ? (
                <>
                    {results.slice(0, 20).map((item, i) => (
                        <ListItem
                            accentColor={accentColor}
                            validation={getValidationStatus}
                            backgroundColor={backgroundColor}
                            onClick={handleClick}
                            isActive={value === item && true}
                            key={uuid()}
                        >
                            {highlight ? getHighlightedText(item, value) : item}
                        </ListItem>
                    ))}

                    <ListItem
                        accentColor={accentColor}
                        validation={getValidationStatus}
                        backgroundColor={backgroundColor}
                        onClick={handleClick}
                    >
                        {highlight ? getHighlightedText(value, value) : value}
                    </ListItem>
                </>
            ) : (
                <ListItem
                    accentColor={accentColor}
                    validation={getValidationStatus}
                    backgroundColor={backgroundColor}
                    readOnly
                >
                    {emptyText}
                </ListItem>
            )

        const listProps = {
            isOpen: (value && isOpen) || false,
            accentColor,
            backgroundColor,
            validation: getValidationStatus,
            direction: listDirection,
        }

        const listFn = () =>
            listVariant === "bordered" ? (
                <ListInputs {...listProps} variant="bordered">
                    {listItemsFn()}
                </ListInputs>
            ) : (
                <ListInputs {...listProps} variant="shadow" shadow={listShadow}>
                    {listItemsFn()}
                </ListInputs>
            )

        const inputFn = () => (
            <Styles.InputContainer>
                {icon && (
                    <IconComponent
                        accentColor={accentColor}
                        disabled={disabled}
                        icon={icon}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={variant}
                    />
                )}

                <Styles.StyledAutocomplete
                    ref={ref}
                    id={id}
                    onFocus={!disabled ? handleOpen : undefined}
                    onBlur={!disabled ? handleClose : undefined}
                    type="text"
                    value={value}
                    autoFocus={autoFocus}
                    onChange={handleFilter}
                    $hasIcon={!!icon}
                    $validation={getValidationStatus}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...rest}
                />

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}

                {listFn()}
            </Styles.InputContainer>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default Autocomplete
