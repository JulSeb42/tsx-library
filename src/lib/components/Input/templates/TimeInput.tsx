/*=============================================== TimeInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

import { StyledInput, StyledInputContent } from "../styles"
import type { TimeInputProps } from "../types"

const TimeInput = forwardRef(
    (
        {
            icon,
            validation,
            type = "time",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            className,
            ...rest
        }: TimeInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        return (
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
                        "input input-time"
                    )}
                    {...rest}
                />

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </StyledInputContent>
        )
    }
)

export default TimeInput
