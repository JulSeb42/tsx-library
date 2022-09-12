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
                    />
                )}

                {inputFunction()}

                {validation && (
                    <RightContainer disabled={disabled}>
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
