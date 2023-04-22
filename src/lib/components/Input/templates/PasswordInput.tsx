/*=============================================== PasswordInput ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
    ButtonRightInputs,
} from "../../InputComponents"

import { StyledInput, StyledInputContent } from "../styles"
import type { PasswordInputProps } from "../types"

const PasswordInput = forwardRef(
    (
        {
            validation,
            icon,
            button,
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            className,
            ...rest
        }: PasswordInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)

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
                        backgroundColor={backgroundColor}
                    />
                )}

                <StyledInput
                    ref={ref}
                    disabled={disabled}
                    type={isVisible ? "text" : "password"}
                    data-variant={variant}
                    data-background={backgroundColor}
                    data-type={isVisible ? "text" : "password"}
                    data-validation={getValidationStatus}
                    className={classNames(
                        { "with-icon": !!icon },
                        "input input-password"
                    )}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}

                    {isVisible ? (
                        button?.iconHide ? (
                            <ButtonRightInputs
                                icon={button?.iconHide}
                                onClick={() => setIsVisible(!isVisible)}
                                disabled={disabled}
                                className="button-password"
                            />
                        ) : (
                            <ButtonRightInputs
                                text={button?.textHide || "Hide"}
                                onClick={() => setIsVisible(!isVisible)}
                                disabled={disabled}
                                className="button-password"
                            />
                        )
                    ) : button?.iconShow ? (
                        <ButtonRightInputs
                            icon={button?.iconShow}
                            onClick={() => setIsVisible(!isVisible)}
                            disabled={disabled}
                            className="button-password"
                        />
                    ) : (
                        <ButtonRightInputs
                            text={button?.textShow || "Show"}
                            onClick={() => setIsVisible(!isVisible)}
                            disabled={disabled}
                            className="button-password"
                        />
                    )}
                </RightContainer>
            </StyledInputContent>
        )
    }
)

export default PasswordInput
