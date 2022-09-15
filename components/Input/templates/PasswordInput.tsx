/*=============================================== PasswordInput ===============================================*/

import React, { forwardRef, useState } from "react"

import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../../InputComponents"
import Button from "../../Button"

import * as Styles from "../styles"
import { PasswordInputProps } from "../types"

const PasswordInput = forwardRef(
    (
        {
            id,
            value,
            name,
            disabled,
            validation,
            icon,
            button,
            autoFocus,
            accentColor,
            backgroundColor,
            iconSize,
            variant = "rounded",
            ...props
        }: PasswordInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)

        const buttonProps = {
            onClick: () => setIsVisible(!isVisible),
            disabled: disabled,
            color: accentColor,
            noPadding: true,
        }

        return (
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
                    id={id}
                    value={value}
                    name={name}
                    disabled={disabled}
                    type={isVisible ? "text" : "password"}
                    ref={ref}
                    $validation={validation?.status}
                    $hasIcon={!!icon}
                    autoFocus={autoFocus}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...props}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {isVisible ? (
                        button?.iconHide ? (
                            <Button
                                icons={{ only: button.iconHide }}
                                variant="text"
                                {...buttonProps}
                            />
                        ) : button?.textHide ? (
                            <Button variant="text" {...buttonProps}>
                                {button?.textHide}
                            </Button>
                        ) : (
                            <Button variant="text" {...buttonProps}>
                                Hide
                            </Button>
                        )
                    ) : button?.iconShow ? (
                        <Button
                            icons={{ only: button.iconShow }}
                            variant="text"
                            {...buttonProps}
                        />
                    ) : button?.textShow ? (
                        <Button variant="text" {...buttonProps}>
                            {button?.textShow}
                        </Button>
                    ) : (
                        <Button variant="text" {...buttonProps}>
                            Show
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
