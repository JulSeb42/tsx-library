/*=============================================== Timepicker component ===============================================*/

import React, { useState, useRef } from "react"
import classNames from "classnames"

import { useClickOutside, uuid } from "../../"
import { InputContainer } from "../InputContainer"
import { ListItem, ListInputs } from "../ListInputs"
import {
    IconComponent,
    RightContainer,
    ValidationComponent,
    ButtonRightInputs,
} from "../InputComponents"
import { ClockIcon } from "../../icons"
import { typeValues } from "../../types"

import { StyledTimepicker, Selected } from "./styles"
import type { TimepickerProps } from "./types"

const Timepicker = ({
    selectedTime,
    setSelectedTime,
    minTime,
    maxTime,
    step = "1h",
    backgroundColor,
    icon,
    iconClock,
    validation,
    disabled,
    id,
    listDirection,
    iconSize,
    inputVariant,
    label,
    helper,
    helperBottom,
    className,
    ...rest
}: TimepickerProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    const [isOpen, setIsOpen] = useState(false)

    let hours: any[] =
        step === "30min"
            ? Object.keys(typeValues.halfTimes)
            : step === "15min"
            ? Object.keys(typeValues.quarterTimes)
            : step === "1min"
            ? Object.keys(typeValues.allTimes)
            : Object.keys(typeValues.times)

    if (minTime) {
        hours = hours.splice(
            hours.indexOf(hours?.find(found => found === minTime)),
            hours.length - 1
        )
    }

    if (maxTime) {
        hours = hours.splice(0, hours.indexOf(maxTime) + 1)
    }

    const handleTime = (hour: any) => {
        setSelectedTime(hour)
        setIsOpen(false)
    }

    const el = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const [cursor, setCursor] = useState<number>(
        hours?.indexOf(selectedTime) || 0
    )

    const handleKeyNavigation = (e: KeyboardEvent) => {
        if (isOpen) {
            if (e.key === "ArrowDown") {
                if (isOpen) {
                    e.preventDefault()

                    if (hours?.length) {
                        const newCursorPosition =
                            hours?.indexOf(selectedTime) === hours?.length - 1
                                ? 0
                                : cursor + 1

                        setCursor(newCursorPosition)

                        setSelectedTime(hours[newCursorPosition])

                        if (cursor === hours?.length - 1) {
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
            }

            if (e.key === "ArrowUp") {
                if (isOpen) {
                    e.preventDefault()

                    const newCursorPosition =
                        hours?.indexOf(selectedTime) <= 0
                            ? hours.length - 1
                            : cursor - 1

                    setCursor(newCursorPosition)

                    setSelectedTime(hours[newCursorPosition])

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
                            top: (cursor - 1) * 40,
                        })
                    }
                }
            }

            if (e.key === "Tab") {
                if (isOpen) {
                    e.preventDefault()
                    setSelectedTime(hours[cursor])
                    setIsOpen(false)
                }
            }

            if (e.key === "Enter") {
                if (isOpen) {
                    e.preventDefault()
                }
            }
        }
    }

    const timepickerFn = () => (
        <StyledTimepicker
            onClick={() => !disabled && setIsOpen(!isOpen)}
            ref={el}
            className={classNames(
                "timepicker-container",
                !label && !helper && !helperBottom && className
            )}
            {...rest}
        >
            <Selected
                id={id}
                className={classNames(
                    { "with-icon": !!icon },
                    "input input-timepicker"
                )}
                data-variant={inputVariant}
                data-background={backgroundColor}
                data-validation={getValidationStatus}
                onKeyDown={(e: any) => handleKeyNavigation(e)}
                onFocus={() => setIsOpen(true)}
            >
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={inputVariant}
                        backgroundColor={backgroundColor}
                    />
                )}

                {selectedTime}

                <RightContainer variant={inputVariant} disabled={disabled}>
                    <ValidationComponent validation={validation} />

                    <ButtonRightInputs
                        icon={iconClock || <ClockIcon size={16} />}
                        onClick={() => setIsOpen(true)}
                        disabled={disabled}
                        className="timepicker-icon-clock"
                        as="span"
                    />
                </RightContainer>
            </Selected>

            <ListInputs
                isOpen={isOpen}
                backgroundColor={backgroundColor}
                validation={getValidationStatus}
                direction={listDirection}
                ref={listRef}
            >
                {hours.map((hour: any) => (
                    <ListItem
                        isActive={selectedTime === hour && true}
                        onClick={() => handleTime(hour)}
                        backgroundColor={backgroundColor}
                        validation={getValidationStatus}
                        key={uuid()}
                    >
                        {hour}
                    </ListItem>
                ))}
            </ListInputs>
        </StyledTimepicker>
    )

    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
        >
            {timepickerFn()}
        </InputContainer>
    ) : (
        timepickerFn()
    )
}

export default Timepicker
