/*=============================================== Autocomplete component ===============================================*/

import React, { forwardRef, useState, useEffect, useRef } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import Fuse from "fuse.js"
import classNames from "classnames"

import { uuid, getHighlightedText, ButtonIcon, Key, useKeyPress } from "../.."
import { InputContainer } from "../InputContainer"
import { ListInputs, ListItem } from "../ListInputs"
import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../InputComponents"
import { CloseIcon } from "../../icons"

import { StyledAutocomplete, AutocompleteContainer } from "./styles"
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
            backgroundColor,
            listDirection,
            iconSize,
            variant = "rounded",
            fuzzyOptions,
            className,
            iconClear,
            focusKeys,
            showKeys,
            ...rest
        }: AutocompleteProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        // Value + results
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
        const clearSearch = () => setValue("")

        const handleClick = (text: string) => setValue(text)

        const keyArr = focusKeys?.map(key =>
            key.includes("Key")
                ? key.replace("Key", "")
                : key === "Command"
                ? "⌘"
                : key === "Enter"
                ? "↵"
                : key === "Control"
                ? "Ctrl"
                : key
        )

        const inputRef = useRef<HTMLInputElement>(null)
        const keys = focusKeys ? focusKeys : [""]
        const handleFocus = () => inputRef?.current?.focus()
        useKeyPress(() => handleFocus(), keys)

        // Fuse results
        let fuzzyResults: { item: string }[]
        const fuse = new Fuse(items, fuzzyOptions)
        fuzzyResults = fuse.search(value)?.slice(0, 20)

        // Keyboard navigation
        const [isOpen, setIsOpen] = useState(false)
        const [isFocus, setIsFocus] = useState(false)
        const listRef = useRef<HTMLDivElement>(null)

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

                    if (fuzzyResults?.length) {
                        setCursor(prevState =>
                            prevState < fuzzyResults?.length - 1
                                ? prevState + 1
                                : 0
                        )

                        if (cursor === fuzzyResults?.length - 1) {
                            listRef?.current?.scrollTo({
                                top: 0,
                            })
                        } else {
                            listRef?.current?.scrollTo({
                                top: cursor * 40,
                            })
                        }
                    }
                }

                if (e.key === "ArrowUp") {
                    e.preventDefault()

                    if (fuzzyResults?.length) {
                        const newCursor = (prevState: number) =>
                            prevState > 0
                                ? prevState - 1
                                : fuzzyResults?.length - 1

                        setCursor(prevState => newCursor(prevState))

                        if (newCursor(cursor) <= 1) {
                            listRef?.current?.scrollTo({
                                top: 0,
                            })
                        } else if (newCursor(cursor) === 0) {
                            listRef?.current?.scrollTo({
                                top: listRef?.current?.scrollHeight,
                            })
                        } else {
                            listRef?.current?.scrollTo({
                                top: newCursor(cursor) * 40,
                            })
                        }
                    }
                }

                if (e.key === "Tab") {
                    e.preventDefault()

                    if (fuzzyResults?.length) {
                        setValue(fuzzyResults[cursor].item)
                        handleClose()
                    }
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

        const inputFn = () => (
            <AutocompleteContainer
                className={classNames(
                    "input-content",
                    !label && !helper && !helperBottom && className
                )}
                ref={ref}
            >
                {icon && (
                    <IconComponent
                        disabled={disabled}
                        icon={icon}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={variant}
                        backgroundColor={backgroundColor}
                    />
                )}

                <StyledAutocomplete
                    id={id}
                    ref={inputRef}
                    onChange={handleChange}
                    onFocus={!disabled ? () => setIsFocus(true) : undefined}
                    onBlur={!disabled ? () => setIsFocus(false) : undefined}
                    onKeyDown={(e: any) => handleKeyNavigation(e)}
                    type="search"
                    value={value}
                    autoFocus={autoFocus}
                    data-variant={variant}
                    data-background={backgroundColor}
                    data-type="search"
                    data-validation={getValidationStatus}
                    className={classNames(
                        { "with-icon": !!icon },
                        "input input-autocomplete",
                        !icon && !validation && className
                    )}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {value.length > 0 && (
                        <ButtonIcon
                            icon={iconClear || <CloseIcon size={20} />}
                            variant="transparent"
                            type="button"
                            size={24}
                            onClick={clearSearch}
                            disabled={disabled}
                            color="primary"
                            className="button-clear"
                        />
                    )}

                    {focusKeys && showKeys && keyArr && (
                        <Key
                            keys={keyArr}
                            accentColor="primary"
                            className="keys"
                        />
                    )}

                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}
                </RightContainer>

                <ListInputs
                    isOpen={value ? isOpen : false}
                    backgroundColor={backgroundColor}
                    validation={getValidationStatus}
                    direction={listDirection}
                    ref={listRef}
                >
                    {value && fuzzyResults?.length ? (
                        fuzzyResults?.map((result, i) => {
                            const getItem = result.item

                            return (
                                <ListItem
                                    onClick={() => handleClick(getItem)}
                                    onMouseEnter={() => setCursor(i)}
                                    onMouseLeave={() => setCursor(0)}
                                    validation={getValidationStatus}
                                    isActive={cursor === i}
                                    key={uuid()}
                                >
                                    {getHighlightedText(getItem, value)}
                                </ListItem>
                            )
                        })
                    ) : (
                        <ListItem
                            validation={getValidationStatus}
                            backgroundColor={backgroundColor}
                            readOnly
                        >
                            {emptyText}
                        </ListItem>
                    )}
                </ListInputs>
            </AutocompleteContainer>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                className={className}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default Autocomplete
