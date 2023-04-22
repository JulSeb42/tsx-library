/*=============================================== Calendar component ===============================================*/

import type { MouseEvent } from "react"
import { useState } from "react"
import classNames from "classnames"

import { Icon, Text, uuid } from "../../"
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons"
import { monthsEn, weekDaysEn } from "./data"

import {
    Day,
    DaysContainer,
    Empty,
    Header,
    NavButton,
    StyledDatepicker,
} from "./styles"
import type { CalendarProps } from "./types"

const Calendar = ({
    minDate,
    maxDate,
    texts,
    selectedDate,
    setSelectedDate,
    icons,
    isOpen,
    calendarDirection,
    setIsOpen,
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

    const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
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
        <StyledDatepicker
            className={classNames(
                { open: isOpen },
                "datepicker-calendar-container"
            )}
            data-direction={calendarDirection}
            data-validation={getValidationStatus}
        >
            <Header
                data-validation={getValidationStatus}
                className="datepicker-header"
            >
                <NavButton
                    onClick={handlePrevMonth}
                    disabled={
                        minDate && minDate?.getTime() > getTimeFromState(1, 0)
                    }
                    type="button"
                    data-validation={getValidationStatus}
                    className="datepicker-nav-button datepicker-nav-button-prev"
                >
                    {icons?.prev ? (
                        typeof icons?.prev === "string" ? (
                            <Icon
                                src={icons.prev}
                                size={24}
                                className="datepicker-nav-icon datepicker-nav-icon-prev"
                            />
                        ) : (
                            icons?.prev
                        )
                    ) : (
                        <ChevronLeftIcon
                            size={24}
                            className="datepicker-nav-icon datepicker-nav-icon-prev"
                        />
                    )}
                </NavButton>

                <Text tag="h6" className="datepicker-nav-current-month-year">
                    {monthArr[currentMonth]} {currentYear}
                </Text>

                <NavButton
                    onClick={handleNextMonth}
                    disabled={
                        maxDate && maxDate?.getTime() < getTimeFromState(0, 1)
                    }
                    type="button"
                    data-validation={getValidationStatus}
                    className="datepicker-nav-button datepicker-nav-button-next"
                >
                    {icons?.next ? (
                        typeof icons?.next === "string" ? (
                            <Icon
                                src={icons.next}
                                size={24}
                                className="datepicker-nav-icon datepicker-nav-icon-next"
                            />
                        ) : (
                            icons?.next
                        )
                    ) : (
                        <ChevronRightIcon
                            size={24}
                            className="datepicker-nav-icon datepicker-nav-icon-next"
                        />
                    )}
                </NavButton>
            </Header>

            <DaysContainer
                data-background={backgroundColor}
                className="datepicker-days-container"
            >
                {weekDaysArr.map(day => (
                    <Text tag="strong" key={uuid()}>
                        {day.slice(0, 3)}
                    </Text>
                ))}

                {getFirstDayOfTheMonth() === "Tuesday" ? (
                    <Empty className="datepicker-day datepicker-day-empty" />
                ) : getFirstDayOfTheMonth() === "Wednesday" ? (
                    [...Array(2)].map(_ => (
                        <Empty
                            className="datepicker-day datepicker-day-empty"
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Thursday" ? (
                    [...Array(3)].map(_ => (
                        <Empty
                            className="datepicker-day datepicker-day-empty"
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Friday" ? (
                    [...Array(4)].map(_ => (
                        <Empty
                            className="datepicker-day datepicker-day-empty"
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Saturday" ? (
                    [...Array(5)].map(_ => (
                        <Empty
                            className="datepicker-day datepicker-day-empty"
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Sunday" ? (
                    [...Array(6)].map(_ => (
                        <Empty
                            className="datepicker-day datepicker-day-empty"
                            key={uuid()}
                        />
                    ))
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
                        <Day
                            id={`day-${day}`}
                            onClick={handleSelect}
                            disabled={
                                (minDate &&
                                    minDate?.getTime() >
                                        getTimeFromState(day + 1, 0)) ||
                                (maxDate &&
                                    maxDate?.getTime() <
                                        getTimeFromState(day, 0))
                            }
                            type="button"
                            className={classNames(
                                { today: formatedDate === today },
                                { active: formatedDate === formatedSelected },
                                "datepicker-day"
                            )}
                            data-background={backgroundColor}
                            data-validation={getValidationStatus}
                            key={uuid()}
                        >
                            {day}
                        </Day>
                    )
                })}
            </DaysContainer>
        </StyledDatepicker>
    )
}

export default Calendar
