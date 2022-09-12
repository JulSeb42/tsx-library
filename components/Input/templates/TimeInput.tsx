/*=============================================== TimeInput ===============================================*/

import React, { forwardRef } from "react"

import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../../InputComponents"

import * as Styles from "../styles"
import { TimeInputProps } from "../types"

const TimeInput = forwardRef(
    (
        {
            name,
            disabled,
            value,
            icon,
            validation,
            type = "time",
            id,
            iconClock,
            autoFocus,
            accentColor,
            backgroundColor,
            ...props
        }: TimeInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => (
        <Styles.StyledInputContent>
            {icon && (
                <IconComponent
                    icon={icon}
                    disabled={disabled}
                    accentColor={accentColor}
                    validation={validation?.status}
                />
            )}

            <Styles.StyledInput
                $iconClock={iconClock}
                $type={type}
                $validation={validation?.status}
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                type={type}
                ref={ref}
                $hasIcon={!!icon}
                autoFocus={autoFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                {...props}
            />

            {validation && (
                <RightContainer disabled={disabled}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            )}
        </Styles.StyledInputContent>
    )
)

export default TimeInput
