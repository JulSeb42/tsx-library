/*=============================================== Multi Timepicker ===============================================*/

import React, { useRef, useState } from "react"
import { formatHour, generateNumbers } from "ts-utils-julseb"
import { useClickOutside } from "../../../hooks"
import { uuid } from "../../../utils/utils"

import Flexbox from "../../Flexbox"
import { IconComponent } from "../../InputComponents"
import { Chevron, ListInputs, ListItem } from "../../ListInputs"

import * as Styles from "../styles"
import { MultiTimepickerProps } from "../types"

const MultiTimePicker = ({
    minTime = 0,
    maxTime = 24,
    step = 1,
    id,
    iconMin,
    iconMax,
    chevronIcon,
    backgroundColor,
    disabled,
    listVariant,
    listShadow,
    selectedMinMax,
    setSelectedMinMax,
    validationMin,
    validationMax,
    accentColor = "primary",
    listDirection,
    iconSize,
    inputVariant,
    ...props
}: MultiTimepickerProps) => {
    const [isMinOpen, setIsMinOpen] = useState(false)
    const [isMaxOpen, setIsMaxOpen] = useState(false)

    const elMin = useRef<HTMLButtonElement>(null)
    const onClickOutsideMin = () => setIsMinOpen(false)
    useClickOutside(elMin, onClickOutsideMin)

    const elMax = useRef<HTMLButtonElement>(null)
    const onClickOutsideMax = () => setIsMaxOpen(false)
    useClickOutside(elMax, onClickOutsideMax)

    const minHours = generateNumbers(
        minTime,
        selectedMinMax.maxTime + step,
        step
    )
    const maxHours = generateNumbers(selectedMinMax.minTime, maxTime, step)

    const handleMinHour = (hour: number) =>
        setSelectedMinMax({
            min: hour,
            max: selectedMinMax.maxTime,
        })

    const handleMaxHour = (hour: number) =>
        setSelectedMinMax({
            min: selectedMinMax.minTime,
            max: hour,
        })

    const basePropsLists = {
        accentColor: accentColor,
        backgroundColor: backgroundColor,
        direction: listDirection,
    }

    const propsListMin = {
        ...basePropsLists,
        isOpen: isMinOpen,
        validation: validationMin?.status,
    }

    const propsListMax = {
        ...basePropsLists,
        isOpen: isMaxOpen,
        validation: validationMax?.status,
    }

    const minHoursMapped = () =>
        minHours.map(hour => (
            <ListItem
                isActive={selectedMinMax.minTime === hour && true}
                onClick={() => handleMinHour(hour)}
                backgroundColor={backgroundColor}
                validation={validationMin?.status}
                accentColor={accentColor}
                key={uuid()}
            >
                {formatHour(hour)}
            </ListItem>
        ))

    const listMin = () =>
        listVariant === "shadow" ? (
            <ListInputs {...propsListMin} variant="shadow" shadow={listShadow}>
                {minHoursMapped()}
            </ListInputs>
        ) : (
            <ListInputs {...propsListMin} variant="bordered">
                {minHoursMapped()}
            </ListInputs>
        )

    const maxHoursMapped = () =>
        maxHours.map(hour => (
            <ListItem
                isActive={selectedMinMax.maxTime === hour && true}
                onClick={() => handleMaxHour(hour)}
                backgroundColor={backgroundColor}
                validation={validationMin?.status}
                accentColor={accentColor}
                key={uuid()}
            >
                {formatHour(hour)}
            </ListItem>
        ))

    const listMax = () =>
        listVariant === "shadow" ? (
            <ListInputs {...propsListMax} variant="shadow" shadow={listShadow}>
                {maxHoursMapped()}
            </ListInputs>
        ) : (
            <ListInputs {...propsListMax} variant="bordered">
                {maxHoursMapped()}
            </ListInputs>
        )

    return (
        <Flexbox gap="xs">
            <Styles.StyledTimePicker
                $isOpen={isMinOpen}
                $disabled={disabled}
                ref={elMin}
                onClick={() => setIsMinOpen(!isMinOpen)}
                {...props}
            >
                <Styles.Selected
                    $backgroundColor={backgroundColor}
                    $validation={validationMin?.status}
                    $isOpen={isMinOpen}
                    $accentColor={accentColor}
                    $disabled={disabled}
                    id={`${id}-min`}
                    $hasIcon={!!iconMin}
                    $variant={inputVariant}
                >
                    {iconMin && (
                        <IconComponent
                            icon={iconMin}
                            disabled={disabled}
                            accentColor={accentColor}
                            validation={validationMin?.status}
                            size={iconSize}
                            variant={inputVariant}
                        />
                    )}

                    {formatHour(selectedMinMax.minTime)}

                    <Chevron
                        icon={chevronIcon}
                        color={accentColor}
                        isOpen={isMinOpen}
                    />
                </Styles.Selected>

                {listMin()}
            </Styles.StyledTimePicker>

            <Styles.StyledTimePicker
                $isOpen={isMaxOpen}
                $disabled={disabled}
                ref={elMax}
                onClick={() => setIsMaxOpen(!isMaxOpen)}
                {...props}
            >
                <Styles.Selected
                    $backgroundColor={backgroundColor}
                    $validation={validationMax?.status}
                    $isOpen={isMaxOpen}
                    $accentColor={accentColor}
                    $disabled={disabled}
                    id={`${id}-max`}
                    $hasIcon={!!iconMax}
                    $variant={inputVariant}
                >
                    {iconMax && (
                        <IconComponent
                            icon={iconMax}
                            disabled={disabled}
                            accentColor={accentColor}
                            validation={validationMax?.status}
                            size={iconSize}
                            variant={inputVariant}
                        />
                    )}

                    {formatHour(selectedMinMax.maxTime)}

                    <Chevron
                        icon={chevronIcon}
                        color={accentColor}
                        isOpen={isMaxOpen}
                    />
                </Styles.Selected>

                {listMax()}
            </Styles.StyledTimePicker>
        </Flexbox>
    )
}

export default MultiTimePicker
