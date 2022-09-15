/*=============================================== DateInput ===============================================*/

import React, { forwardRef } from "react"

import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../../InputComponents"

import * as Styles from "../styles"
import { DateInputProps } from "../types"

const DateInput = forwardRef(
    (
        {
            id,
            type,
            value,
            name,
            disabled,
            icon,
            iconCalendar,
            validation,
            autoFocus,
            accentColor,
            backgroundColor,
            iconSize,
            variant = "rounded",
            ...props
        }: DateInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const inputFunction = () => (
            <Styles.StyledInput
                id={id}
                type={type}
                value={value}
                name={name}
                disabled={disabled}
                $iconCalendar={iconCalendar}
                $type={type}
                $validation={validation?.status}
                ref={ref}
                $hasIcon={!!icon}
                autoFocus={autoFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $variant={variant}
                {...props}
            />
        )

        return icon || validation ? (
            <Styles.StyledInputContent>
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
                        validation={validation?.status}
                        size={iconSize}
                        variant={variant}
                    />
                )}

                {inputFunction()}

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </Styles.StyledInputContent>
        ) : (
            inputFunction()
        )
    }
)

export default DateInput
