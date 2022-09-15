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
            iconSize,
            variant = "rounded",
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
                    size={iconSize}
                    variant={variant}
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
                $variant={variant}
                {...props}
            />

            {validation && (
                <RightContainer disabled={disabled} variant={variant}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            )}
        </Styles.StyledInputContent>
    )
)

export default TimeInput
