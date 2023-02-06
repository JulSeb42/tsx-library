/*=============================================== TimeInput ===============================================*/

import React, { forwardRef } from "react"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

import * as Styles from "../styles"
import { TimeInputProps } from "../types"

const TimeInput = forwardRef(
    (
        {
            icon,
            validation,
            type = "time",
            iconClock,
            accentColor = "primary",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            ...rest
        }: TimeInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        return (
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

                <Styles.StyledInput
                    ref={ref}
                    $iconClock={iconClock}
                    $type={type}
                    $validation={getValidationStatus}
                    disabled={disabled}
                    type={type}
                    $hasIcon={!!icon}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...rest}
                />

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </Styles.StyledInputContent>
        )
    }
)

export default TimeInput
