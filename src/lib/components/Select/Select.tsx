/*=============================================== Select component ===============================================*/

import React, { useRef, useState, useEffect } from "react"
import classNames from "classnames"

import { uuid, useClickOutside } from "../../"
import { ListInputs, ListItem } from "../ListInputs"
import { InputContainer } from "../InputContainer"
import { ButtonRightInputs, RightContainer } from "../InputComponents"

import { StyledSelect, Selected } from "./styles"
import type { SelectProps } from "./types"
import { CaretDownIcon } from "../../icons"

const Select = ({
    as,
    id,
    disabled,
    selected,
    setSelected,
    label,
    helper,
    helperBottom,
    items,
    backgroundColor,
    listDirection,
    variant = "rounded",
    iconCaret,
    className,
    tabIndex,
    ...rest
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const el = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const selectItem = (value: string) => {
        setSelected(value)
        setIsOpen(false)
    }

    // Keyboard navigation
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

    const [cursor, setCursor] = useState<number>(items?.indexOf(selected) || 0)

    // eslint-disable-next-line
    const handleKeyNavigation = (e: KeyboardEvent) => {
        if (isOpen) {
            if (e.key === "ArrowDown") {
                e.preventDefault()

                if (items?.length) {
                    const newCursorPosition =
                        items?.indexOf(selected) === items?.length - 1
                            ? 0
                            : cursor + 1

                    setCursor(newCursorPosition)

                    setSelected(items[newCursorPosition])

                    if (cursor === items?.length - 1) {
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

                if (items) {
                    const newCursorPosition =
                        items?.indexOf(selected) <= 0
                            ? items.length - 1
                            : cursor - 1

                    setCursor(newCursorPosition)

                    setSelected(items[newCursorPosition])

                    if (newCursorPosition <= 1) {
                        listRef?.current?.scrollTo({
                            top: 0,
                        })
                    } else if (cursor === 0) {
                        listRef?.current?.scrollTo({
                            top: listRef?.current?.scrollHeight,
                        })
                    } else {
                        listRef?.current?.scrollTo({
                            top: cursor * 40,
                        })
                    }
                }
            }

            if (e.key === "Tab" || e.key === "Enter") {
                e.preventDefault()

                if (items) {
                    setSelected(items[cursor])
                    handleClose()
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keypress", () => handleKeyNavigation)

        if (isFocus && items?.length) {
            handleOpen()
        } else {
            setIsOpen(false)
        }
    }, [handleKeyNavigation, isFocus, items])

    const content = () => (
        <StyledSelect
            disabled={disabled}
            onClick={!disabled ? () => setIsOpen(!isOpen) : undefined}
            id={id}
            ref={el}
            as={as}
            className={classNames(
                { open: isOpen },
                { empty: !items?.length },
                { disabled: disabled }
            )}
            {...rest}
        >
            <Selected
                className={classNames({ empty: !items?.length })}
                disabled={disabled}
                onFocus={handleOpen}
                onBlur={handleClose}
                onClick={handleOpen}
                tabIndex={tabIndex}
                type="button"
                onKeyDown={(e: any) => handleKeyNavigation(e)}
            >
                {selected}

                {items && (
                    <RightContainer
                        variant={variant}
                        disabled={disabled}
                        className="select-icon-container"
                    >
                        <ButtonRightInputs
                            icon={iconCaret || <CaretDownIcon size={16} />}
                            onClick={handleOpen}
                            disabled={disabled}
                            className="select-icon"
                        />
                    </RightContainer>
                )}
            </Selected>

            <ListInputs
                isOpen={isOpen}
                backgroundColor={backgroundColor}
                direction={listDirection}
                data-variant={variant}
                data-background={backgroundColor}
                ref={listRef}
            >
                {items?.map(item => (
                    <ListItem
                        isActive={selected === item && true}
                        onClick={() => selectItem(item)}
                        backgroundColor={backgroundColor}
                        key={uuid()}
                    >
                        {item}
                    </ListItem>
                ))}
            </ListInputs>
        </StyledSelect>
    )

    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
        >
            {content()}
        </InputContainer>
    ) : (
        content()
    )
}

export default Select
