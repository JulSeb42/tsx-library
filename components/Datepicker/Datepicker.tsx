/*=============================================== Datepicker component ===============================================*/

import React, { useState, useRef } from "react"

import { convertDateShort, useClickOutside, Icon, Flexbox } from "../../"
import { CalendarIcon } from "../../icons"
import Calendar from "./Calendar"
import { ValidationComponent, IconComponent } from "../InputComponents"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import type { DatepickerProps } from "./types"

const Datepicker = ({
    minDate,
    maxDate,
    texts,
    accentColor = "primary",
    selectedDate,
    setSelectedDate,
    icons,
    id,
    validation,
    backgroundColor,
    disabled,
    calendarDirection = "down",
    calendarShadow = "s",
    calendarVariant = "bordered",
    label,
    helper,
    helperBottom,
    iconSize,
    inputVariant,
    ...rest
}: DatepickerProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    const [isOpen, setIsOpen] = useState(false)
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const propsCalendar = {
        id: id,
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
        minDate: minDate,
        maxDate: maxDate,
        texts: texts,
        accentColor: accentColor,
        icons: icons,
        isOpen: isOpen,
        calendarDirection: calendarDirection,
        setIsOpen: setIsOpen,
        validation: validation,
    }

    const calendarFn = () =>
        calendarVariant === "bordered" ? (
            <Calendar
                backgroundColor={backgroundColor}
                calendarVariant={calendarVariant}
                {...propsCalendar}
            />
        ) : (
            <Calendar
                backgroundColor={backgroundColor}
                calendarVariant={calendarVariant}
                calendarShadow={calendarShadow}
                {...propsCalendar}
            />
        )

    const inputFn = () => (
        <Styles.DatepickerContainer
            $isOpen={isOpen}
            ref={el}
            disabled={disabled}
            {...rest}
        >
            <Styles.Selected
                onClick={() => (!disabled ? setIsOpen(!isOpen) : undefined)}
                $disabled={disabled}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $isOpen={isOpen}
                $validation={getValidationStatus}
                $hasIcon={!!icons?.icon}
                $variant={inputVariant}
            >
                {icons?.icon && (
                    <IconComponent
                        icon={icons.icon}
                        accentColor={accentColor}
                        disabled={disabled}
                        validation={getValidationStatus}
                        size={iconSize}
                    />
                )}

                {convertDateShort(selectedDate)}

                <Flexbox as="span" gap="xs" alignItems="center">
                    {icons?.calendar ? (
                        typeof icons?.calendar === "string" ? (
                            <Icon
                                src={icons.calendar}
                                size={16}
                                color={disabled ? "gray" : accentColor}
                            />
                        ) : (
                            icons?.calendar
                        )
                    ) : (
                        <CalendarIcon
                            size={16}
                            color={disabled ? "gray" : accentColor}
                        />
                    )}

                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}
                </Flexbox>
            </Styles.Selected>

            {calendarFn()}
        </Styles.DatepickerContainer>
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

export default Datepicker
