/*=============================================== Timepicker component ===============================================*/

import React, { useState, useRef } from "react"

import { generateNumbers, useClickOutside, formatHour, uuid } from "../../"
import { InputContainer } from "../InputContainer"
import { ListItem, ListInputs, Chevron } from "../ListInputs"
import { IconComponent } from "../InputComponents"

import * as Styles from "./styles"
import type { TimepickerProps } from "./types"

const TimepickerFunction = ({
    selectedTime,
    setSelectedTime,
    minTime = 0,
    maxTime = 24,
    step = 1,
    backgroundColor,
    icon,
    chevronIcon,
    accentColor = "primary",
    validation,
    disabled,
    listVariant = "bordered",
    listShadow,
    id,
    listDirection,
    iconSize,
    inputVariant,
    ...rest
}: TimepickerProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    const [isOpen, setIsOpen] = useState(false)

    const hours = generateNumbers(minTime, maxTime, step)

    const handleTime = (hour: number) => setSelectedTime(hour)

    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const hoursMapped = () =>
        hours.map(hour => (
            <ListItem
                isActive={selectedTime === hour && true}
                onClick={() => handleTime(hour)}
                backgroundColor={backgroundColor}
                validation={getValidationStatus}
                accentColor={accentColor}
                key={uuid()}
            >
                {formatHour(hour)}
            </ListItem>
        ))

    const propsList = {
        isOpen: isOpen,
        accentColor: accentColor,
        backgroundColor: backgroundColor,
        validation: getValidationStatus,
        direction: listDirection,
    }

    const listInput = () =>
        listVariant === "shadow" ? (
            <ListInputs {...propsList} variant="shadow" shadow={listShadow}>
                {hoursMapped()}
            </ListInputs>
        ) : (
            <ListInputs {...propsList} variant="bordered">
                {hoursMapped()}
            </ListInputs>
        )

    return (
        <Styles.StyledTimepicker
            $isOpen={isOpen}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            ref={el}
            $disabled={disabled}
            {...rest}
        >
            <Styles.Selected
                $backgroundColor={backgroundColor}
                $validation={getValidationStatus}
                $isOpen={isOpen}
                $accentColor={accentColor}
                $disabled={disabled}
                id={id}
                $hasIcon={!!icon}
                $variant={inputVariant}
            >
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={inputVariant}
                    />
                )}

                {formatHour(selectedTime)}

                <Chevron
                    icon={chevronIcon}
                    color={accentColor}
                    isOpen={isOpen}
                />
            </Styles.Selected>

            {listInput()}
        </Styles.StyledTimepicker>
    )
}

const Timepicker = ({
    id,
    label,
    helper,
    helperBottom,
    accentColor,
    ...rest
}: TimepickerProps) => {
    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            accentColor={accentColor}
        >
            <TimepickerFunction id={id} accentColor={accentColor} {...rest} />
        </InputContainer>
    ) : (
        <TimepickerFunction id={id} {...rest} />
    )
}

export default Timepicker
