/*=============================================== DateInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

import * as Styles from "../styles"
import type { DateInputProps } from "../types"

const DateInput = forwardRef(
    (
        {
            type,
            icon,
            iconCalendar,
            validation,
            accentColor = "primary",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            ...rest
        }: DateInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputFn = () => (
            <Styles.StyledInput
                ref={ref}
                $iconCalendar={iconCalendar}
                $validation={getValidationStatus}
                $hasIcon={!!icon}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $variant={variant}
                disabled={disabled}
                type={type}
                $type={type}
                {...rest}
            />
        )

        return icon || validation ? (
            <Styles.StyledInputContent>
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
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
            </Styles.StyledInputContent>
        ) : (
            inputFn()
        )
    }
)

export default DateInput
