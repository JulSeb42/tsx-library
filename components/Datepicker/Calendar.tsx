/*=============================================== Calendar component ===============================================*/

import React, { useState } from "react"

import { Icon, Text, uuid } from "../../"
import { monthsEn, weekDaysEn } from "./data"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"

import * as Styles from "./styles"
import { CalendarProps } from "./types"

const Calendar = ({
    minDate,
    maxDate,
    texts,
    accentColor = "primary",
    selectedDate,
    setSelectedDate,
    icons,
    isOpen,
    calendarDirection,
    setIsOpen,
    calendarVariant,
    calendarShadow,
    validation,
    backgroundColor,
}: CalendarProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const weekDaysArr = texts?.weekDays
        ? Object.values(texts?.weekDays)
        : Object.values(weekDaysEn)
    const monthArr = texts?.months
        ? Object.values(texts.months)
        : Object.values(monthsEn)

    const getNumbersOfDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const range = (start: number, end: number) => {
        const length = Math.abs((end - start) / 1)

        const { result } = Array.from({ length }).reduce(
            ({ result, current }) => ({
                result: [...result, current],
                current: current + 1,
            }),
            { result: [], current: start }
        )

        return result
    }

    const handlePrevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(month => month - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear(year => year - 1)
        }
    }

    const handleNextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(month => month + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear(year => year + 1)
        }
    }

    const mapRange = range(
        1,
        getNumbersOfDaysInMonth(currentYear, currentMonth) + 1
    )

    const getFirstDayOfTheMonth = () => {
        const allDays = mapRange.map(day =>
            new Date(
                `${currentYear}/${currentMonth + 1}/${day}`
            ).toLocaleDateString("en-EN", { weekday: "long" })
        )

        return allDays[0]
    }

    const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement

        if (target.id.includes("day-")) {
            setSelectedDate(
                new Date(
                    currentYear,
                    currentMonth,
                    parseFloat(target.id.replace("day-", ""))
                )
            )
        }

        setIsOpen(false)
    }

    const formatDate = (year: number, month: number, day: number) =>
        `${year}/${month}/${day}`

    const today = formatDate(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate()
    )

    const getTimeFromState = (_day: number, plus?: number) => {
        return new Date(
            currentYear,
            plus ? plus + currentMonth : currentMonth,
            _day
        ).getTime()
    }

    return (
        <Styles.StyledDatepicker
            $accentColor={accentColor}
            $isOpen={isOpen}
            $calendarDirection={calendarDirection}
            $variant={calendarVariant}
            $shadow={calendarShadow}
            $validation={getValidationStatus}
            $backgroundColor={backgroundColor}
        >
            <Styles.Header
                $accentColor={accentColor}
                $validation={getValidationStatus}
                $backgroundColor={backgroundColor}
            >
                <Styles.NavButton
                    onClick={handlePrevMonth}
                    disabled={
                        minDate && minDate?.getTime() > getTimeFromState(1, 1)
                    }
                    $accentColor={accentColor}
                    $validation={getValidationStatus}
                >
                    {icons?.prev ? (
                        <Icon src={icons.prev} size={24} />
                    ) : (
                        <ChevronLeftIcon size={24} />
                    )}
                </Styles.NavButton>

                <Text tag="h6">
                    {monthArr[currentMonth]} {currentYear}
                </Text>

                <Styles.NavButton
                    onClick={handleNextMonth}
                    disabled={
                        maxDate && maxDate?.getTime() < getTimeFromState(1, 2)
                    }
                    $accentColor={accentColor}
                    $validation={getValidationStatus}
                >
                    {icons?.next ? (
                        <Icon src={icons.next} size={24} />
                    ) : (
                        <ChevronRightIcon size={24} />
                    )}
                </Styles.NavButton>
            </Styles.Header>

            <Styles.DaysContainer $backgroundColor={backgroundColor}>
                {weekDaysArr.map(day => (
                    <Text tag="strong" key={uuid()}>
                        {day.slice(0, 3)}
                    </Text>
                ))}

                {getFirstDayOfTheMonth() === "Tuesday" ? (
                    <Styles.Empty />
                ) : getFirstDayOfTheMonth() === "Wednesday" ? (
                    [...Array(2)].map(_ => <Styles.Empty key={uuid()} />)
                ) : getFirstDayOfTheMonth() === "Thursday" ? (
                    [...Array(3)].map(_ => <Styles.Empty key={uuid()} />)
                ) : getFirstDayOfTheMonth() === "Friday" ? (
                    [...Array(4)].map(_ => <Styles.Empty key={uuid()} />)
                ) : getFirstDayOfTheMonth() === "Saturday" ? (
                    [...Array(5)].map(_ => <Styles.Empty key={uuid()} />)
                ) : getFirstDayOfTheMonth() === "Sunday" ? (
                    [...Array(6)].map(_ => <Styles.Empty key={uuid()} />)
                ) : (
                    ""
                )}

                {mapRange.map(day => {
                    const formatedDate = formatDate(
                        currentYear,
                        currentMonth + 1,
                        day
                    )
                    const formatedSelected = selectedDate
                        ? formatDate(
                              new Date(selectedDate).getFullYear(),
                              new Date(selectedDate).getMonth() + 1,
                              new Date(selectedDate).getDate()
                          )
                        : null

                    return (
                        <Styles.Day
                            id={`day-${day}`}
                            onClick={handleSelect}
                            $isActive={formatedDate === formatedSelected}
                            $isToday={formatedDate === today}
                            $accentColor={accentColor}
                            $validation={getValidationStatus}
                            disabled={
                                (minDate &&
                                    minDate?.getTime() >
                                        getTimeFromState(day, 1)) ||
                                (maxDate &&
                                    maxDate?.getTime() <
                                        getTimeFromState(day, 1))
                            }
                            $backgroundColor={backgroundColor}
                            key={uuid()}
                        >
                            {day}
                        </Styles.Day>
                    )
                })}
            </Styles.DaysContainer>
        </Styles.StyledDatepicker>
    )
}

export default Calendar
