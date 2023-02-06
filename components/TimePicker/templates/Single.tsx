/*=============================================== Single Timepicker ===============================================*/

import React, { forwardRef, useRef, useState } from "react"

import { formatHour, generateNumbers, useClickOutside, uuid } from "../../../"
import { IconComponent } from "../../InputComponents"
import { ListInputs, ListItem, Chevron } from "../../ListInputs"

import * as Styles from "../styles"
import { TimepickerSingleProps } from "../types"

const SingleTimepicker = forwardRef(
    (
        {
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
            tabIndex,
            ...rest
        }: TimepickerSingleProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
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
)

export default SingleTimepicker
