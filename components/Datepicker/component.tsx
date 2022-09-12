/*=============================================== Datepicker ===============================================*/

import React, { useState, useRef } from "react"
import { convertDateShort } from "ts-utils-julseb"
import { useClickOutside } from "../../hooks"

import Calendar from "./Calendar"
import Icon from "../Icon"
import CalendarIcon from "../../icons/CalendarIcon"
import Flexbox from "../Flexbox"
import { ValidationComponent, IconComponent } from "../InputComponents"
import InputContainer from "../InputContainer"

import * as Styles from "./styles"
import { DatepickerProps } from "./types"

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
    ...props
}: DatepickerProps) => {
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

    const calendarFunc = () =>
        calendarVariant === "bordered" ? (
            <Calendar
                backgroundColor={backgroundColor}
                {...propsCalendar}
                calendarVariant={calendarVariant}
            />
        ) : (
            <Calendar
                {...propsCalendar}
                backgroundColor={backgroundColor}
                calendarVariant={calendarVariant}
                calendarShadow={calendarShadow}
            />
        )

    const inputFunc = () => (
        <Styles.DatepickerContainer
            $isOpen={isOpen}
            ref={el}
            disabled={disabled}
            {...props}
        >
            <Styles.Selected
                $disabled={disabled}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $isOpen={isOpen}
                onClick={() => (!disabled ? setIsOpen(!isOpen) : undefined)}
                $validation={validation?.status}
                $hasIcon={!!icons?.icon}
            >
                {icons?.icon && (
                    <IconComponent
                        icon={icons.icon}
                        accentColor={accentColor}
                        disabled={disabled}
                        validation={validation?.status}
                    />
                )}
                {convertDateShort(selectedDate)}

                <Flexbox as="span" gap="xs" alignItems="center">
                    {icons?.calendar ? (
                        <Icon
                            src={icons.calendar}
                            size={16}
                            color={disabled ? "gray" : accentColor}
                        />
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

            {calendarFunc()}
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
            {inputFunc()}
        </InputContainer>
    ) : (
        inputFunc()
    )
}

export default Datepicker
