/*=============================================== Datepicker component ===============================================*/

import { useRef, useState } from "react"
import classNames from "classnames"

import { convertDateShort, useClickOutside } from "../../"
import { CalendarIcon } from "../../icons"
import {
    IconComponent,
    ValidationComponent,
    RightContainer,
    ButtonRightInputs,
} from "../InputComponents"
import { InputContainer } from "../InputContainer"
import Calendar from "./Calendar"

import { DatepickerContainer, Selected } from "./styles"
import type { DatepickerProps } from "./types"

const Datepicker = ({
    minDate,
    maxDate,
    texts,
    selectedDate,
    setSelectedDate,
    icons,
    id,
    validation,
    backgroundColor,
    disabled,
    calendarDirection = "down",
    label,
    helper,
    helperBottom,
    iconSize,
    inputVariant,
    className,
    tabIndex,
    ...rest
}: DatepickerProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    const [isOpen, setIsOpen] = useState(false)
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const inputFn = () => (
        <DatepickerContainer
            ref={el}
            disabled={disabled}
            className={classNames(
                { open: isOpen },
                "datepicker-container",
                !label && !helper && !helperBottom && className
            )}
            {...rest}
        >
            <Selected
                onClick={() => (!disabled ? setIsOpen(true) : undefined)}
                onFocus={() => setIsOpen(true)}
                tabIndex={tabIndex}
                data-variant={inputVariant}
                data-validation={getValidationStatus}
                data-background={backgroundColor}
                className={classNames(
                    { "with-icon": !!icons?.icon },
                    "datepicker-selected"
                )}
                disabled={disabled}
            >
                {icons?.icon && (
                    <IconComponent
                        icon={icons.icon}
                        disabled={disabled}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={inputVariant}
                        backgroundColor={backgroundColor}
                    />
                )}

                {convertDateShort(selectedDate)}

                <RightContainer variant={inputVariant} disabled={disabled}>
                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}

                    <ButtonRightInputs
                        icon={icons?.calendar || <CalendarIcon size={16} />}
                        onClick={() => setIsOpen(true)}
                        disabled={disabled}
                        className="datapicker-calendar-icon"
                    />
                </RightContainer>
            </Selected>

            <Calendar
                id={id}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                minDate={minDate}
                maxDate={maxDate}
                texts={texts}
                icons={icons}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                calendarDirection={calendarDirection}
                validation={validation}
                backgroundColor={backgroundColor}
            />
        </DatepickerContainer>
    )

    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            className={className}
        >
            {inputFn()}
        </InputContainer>
    ) : (
        inputFn()
    )
}

export default Datepicker
