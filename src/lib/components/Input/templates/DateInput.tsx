/*=============================================== DateInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

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
            ...rest
        }: DateInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputFn = () => (
            <StyledInput
                ref={ref}
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
                {...rest}
            />
        )

        return icon || validation ? (
            <StyledInputContent
                className={classNames("input-content", className)}
            >
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        validation={getValidationStatus}
                        size={iconSize}
                        variant={variant}
                    />
                )}

                {inputFn()}

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </StyledInputContent>
        ) : (
            inputFn()
        )
    }
)

export default DateInput
