/*=============================================== Single Timepicker ===============================================*/

import React, { useRef, useState } from "react"
import { formatHour, generateNumbers } from "ts-utils-julseb"
import { useClickOutside } from "../../../hooks"
import { uuid } from "../../../utils/utils"

import { IconComponent } from "../../InputComponents"
import { Chevron, ListInputs, ListItem } from "../../ListInputs"

import * as Styles from "../styles"
import { SingleTimepickerProps } from "../types"

const SingleTimePicker = ({
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
    ...props
}: SingleTimepickerProps) => {
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
                validation={validation?.status}
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
        validation: validation?.status,
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
        <Styles.StyledTimePicker
            $isOpen={isOpen}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            ref={el}
            $disabled={disabled}
            {...props}
        >
            <Styles.Selected
                $backgroundColor={backgroundColor}
                $validation={validation?.status}
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
                        validation={validation?.status}
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
        </Styles.StyledTimePicker>
    )
}

export default SingleTimePicker
