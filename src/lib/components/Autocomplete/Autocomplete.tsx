/*=============================================== Autocomplete component ===============================================*/

import React, { forwardRef, useState, useEffect } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import Fuse from "fuse.js"

import { uuid, getHighlightedText } from "../.."
import { InputContainer } from "../InputContainer"
import { ListInputs, ListItem } from "../ListInputs"
import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../InputComponents"

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
        // Value + results
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)

        const handleClick = (text: string) => setValue(text)

        const results = items
            .filter(item =>
                item.toLowerCase().includes((value || "").toLowerCase())
            )
            ?.sort()

        // Fuse results
        let fuzzyResults: { item: string }[]

        if (fuzzy) {
            const fuse = new Fuse(items, fuzzy.options)

            fuzzyResults = fuse.search(value)
        }

        // Keyboard navigation
        const [isOpen, setIsOpen] = useState(false)
        const [isFocus, setIsFocus] = useState(false)

        const handleOpen = () => {
            setIsFocus(true)
            setIsOpen(true)
        }
        const handleClose = () =>
            setTimeout(() => {
                setIsFocus(false)
                setIsOpen(false)
            }, 100)

        const [cursor, setCursor] = useState<number>(0)

        // eslint-disable-next-line
        const handleKeyNavigation = (e: KeyboardEvent) => {
            if (isOpen) {
                if (e.key === "ArrowDown") {
                    e.preventDefault()

                    if (fuzzyResults) {
                        setCursor(prevState =>
                            prevState < fuzzyResults?.length - 1
                                ? prevState + 1
                                : prevState
                        )
                    } else {
                        setCursor(prevState =>
                            prevState < results?.length - 1
                                ? prevState + 1
                                : prevState
                        )
                    }
                }

                if (e.key === "ArrowUp") {
                    e.preventDefault()

                    if (fuzzyResults) {
                        setCursor(prevState =>
                            prevState > 0 ? prevState - 1 : prevState
                        )
                    } else {
                        setCursor(prevState =>
                            prevState > 0 ? prevState - 1 : prevState
                        )
                    }
                }

                if (e.key === "Tab") {
                    e.preventDefault()
                    setValue(
                        fuzzy ? fuzzyResults[cursor].item : results[cursor]
                    )
                    handleClose()
                }
            }
        }

        useEffect(() => {
            window.addEventListener("keypress", () => handleKeyNavigation)

            if (isFocus && value?.length) {
                handleOpen()
            } else {
                setIsOpen(false)
            }
        }, [handleKeyNavigation, isFocus, value])

        // Components
        const listItemsFn = () =>
            fuzzy && value && fuzzyResults?.length ? (
                fuzzyResults?.slice(0, 20)?.map((result, i) => {
                    const getItem = result.item

                    return (
                        <ListItem
                            onClick={() => handleClick(getItem)}
                            onMouseEnter={() => setCursor(i)}
                            onMouseLeave={() => setCursor(0)}
                            accentColor={accentColor}
                            validation={getValidationStatus}
                            isActive={cursor === i}
                            key={uuid()}
                        >
                            {highlight
                                ? getHighlightedText(getItem, value)
                                : getItem}
                        </ListItem>
                    )
                })
            ) : value?.length && results?.length ? (
                results?.slice(0, 20)?.map((result, i) => (
                    <ListItem
                        onClick={() => handleClick(result)}
                        onMouseEnter={() => setCursor(i)}
                        onMouseLeave={() => setCursor(0)}
                        accentColor={accentColor}
                        validation={getValidationStatus}
                        isActive={cursor === i}
                        key={uuid()}
                    >
                        {highlight ? getHighlightedText(result, value) : result}
                    </ListItem>
                ))
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
                    onChange={handleChange}
                    onFocus={!disabled ? () => setIsFocus(true) : undefined}
                    onBlur={!disabled ? () => setIsFocus(false) : undefined}
                    onKeyDown={(e: any) => handleKeyNavigation(e)}
                    type="text"
                    value={value}
                    autoFocus={autoFocus}
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
