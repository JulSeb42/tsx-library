/*=============================================== PasswordInput ===============================================*/

import { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"

import { Button, ButtonIcon } from "../../../"
import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

import * as Styles from "../styles"
import type { PasswordInputProps } from "../types"

const PasswordInput = forwardRef(
    (
        {
            validation,
            icon,
            button,
            accentColor = "primary",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            ...rest
        }: PasswordInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)

        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const buttonProps = {
            onClick: () => setIsVisible(!isVisible),
            disabled,
            color: accentColor,
            noPadding: true,
        }

        const buttonIconProps = {
            onClick: () => setIsVisible(!isVisible),
            disabled,
            color: accentColor,
            size: 32,
        }

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
                    disabled={disabled}
                    type={isVisible ? "text" : "password"}
                    $validation={getValidationStatus}
                    $hasIcon={!!icon}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {isVisible ? (
                        button?.iconHide ? (
                            <ButtonIcon
                                icon={button.iconHide}
                                variant="transparent"
                                borderRadius="none"
                                type="button"
                                {...buttonIconProps}
                            />
                        ) : (
                            <Button
                                variant="text"
                                type="button"
                                {...buttonProps}
                            >
                                {button?.textHide || "Hide"}
                            </Button>
                        )
                    ) : button?.iconShow ? (
                        <ButtonIcon
                            icon={button.iconShow}
                            variant="transparent"
                            borderRadius="none"
                            type="button"
                            {...buttonIconProps}
                        />
                    ) : (
                        <Button variant="text" type="button" {...buttonProps}>
                            {button?.textShow || "Show"}
                        </Button>
                    )}

                    {validation && (
                        <ValidationComponent validation={validation} />
                    )}
                </RightContainer>
            </Styles.StyledInputContent>
        )
    }
)

export default PasswordInput
