/*=============================================== DateInput ===============================================*/

import React, { forwardRef, useRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
    ButtonRightInputs,
} from "../../InputComponents"
import { CalendarIcon } from "../../../icons"

import { StyledInput, StyledInputContent } from "../styles"
import type { DateInputProps } from "../types"

const DateInput = forwardRef(
    (
        {
            type,
            icon,
            validation,
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            className,
            iconCalendar,
            ...rest
        }: DateInputProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputRef = useRef<HTMLInputElement>(null)
        const showPicker = () => inputRef?.current?.showPicker()

        return (
            <StyledInputContent
                className={classNames("input-content", className)}
                ref={ref}
            >
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={variant}
                        backgroundColor={backgroundColor}
                    />
                )}

                <StyledInput
                    ref={inputRef}
                    disabled={disabled}
                    type={type}
                    data-variant={variant}
                    data-background={backgroundColor}
                    data-type={type}
                    data-validation={getValidationStatus}
                    className={classNames(
                        { "with-icon": !!icon },
                        "input input-date",
                        !icon && !validation && className
                    )}
                    onClick={showPicker}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    <ButtonRightInputs
                        icon={iconCalendar || <CalendarIcon size={16} />}
                        onClick={showPicker}
                        disabled={disabled}
                    />

                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}
                </RightContainer>
            </StyledInputContent>
        )
    }
)

export default DateInput
