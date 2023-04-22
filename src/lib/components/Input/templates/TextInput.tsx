/*=============================================== TextInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

import { StyledInput, StyledInputContent } from "../styles"
import type { TextInputProps } from "../types"

const TextInput = forwardRef(
    (
        {
            type,
            maxLength,
            validation,
            icon,
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            className,
            ...rest
        }: TextInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputFn = () => (
            <StyledInput
                ref={ref}
                type={type}
                maxLength={maxLength}
                disabled={disabled}
                data-variant={variant}
                data-background={backgroundColor}
                data-type={type}
                data-validation={getValidationStatus}
                className={classNames(
                    { "with-icon": !!icon },
                    "input input-text",
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
                        backgroundColor={backgroundColor}
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

export default TextInput
