/*=============================================== PasswordInput ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Button, ButtonIcon } from "../../../"
import {
    RightContainer,
    IconComponent,
    ValidationComponent,
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

        const baseButtonProps = {
            disabled,
            onClick: () => setIsVisible(!isVisible),
            className: "button-password",
        }

        const buttonProps = {
            ...baseButtonProps,
            noPadding: true,
        }

        const buttonIconProps = {
            ...baseButtonProps,
            size: 32,
        }

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
                    {isVisible ? (
                        button?.iconHide ? (
                            <ButtonIcon
                                icon={button.iconHide}
                                type="button"
                                color="primary"
                                variant="transparent"
                                {...buttonIconProps}
                            />
                        ) : (
                            <Button
                                type="button"
                                color="primary"
                                variant="transparent"
                                {...buttonProps}
                            >
                                {button?.textHide || "Hide"}
                            </Button>
                        )
                    ) : button?.iconShow ? (
                        <ButtonIcon
                            icon={button.iconShow}
                            type="button"
                            color="primary"
                            variant="transparent"
                            {...buttonIconProps}
                        />
                    ) : (
                        <Button
                            type="button"
                            color="primary"
                            variant="transparent"
                            {...buttonProps}
                        >
                            {button?.textShow || "Show"}
                        </Button>
                    )}

                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}
                </RightContainer>
            </StyledInputContent>
        )
    }
)

export default PasswordInput
