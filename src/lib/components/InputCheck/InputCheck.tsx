/*=============================================== InputCheck component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import {
    StyledInputCheck,
    Radio,
    Checkbox,
    Toggle,
    Selector,
    Input,
} from "./styles"
import type { InputCheckProps } from "./types"

const InputCheck = forwardRef(
    (
        {
            type = "radio",
            id,
            label,
            validation,
            variant,
            disabled,
            className,
            ...rest
        }: InputCheckProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const inputFn = () => {
            if (variant === "toggle") {
                return (
                    <Toggle
                        htmlFor={id}
                        data-validation={validation}
                        data-variant={variant}
                        className="toggle"
                    >
                        {label}
                    </Toggle>
                )
            }

            if (variant === "selector") {
                return (
                    <Selector
                        htmlFor={id}
                        data-validation={validation}
                        data-variant={variant}
                        className="selector"
                    >
                        {label}
                    </Selector>
                )
            }

            if (type === "checkbox") {
                return (
                    <Checkbox
                        htmlFor={id}
                        data-validation={validation}
                        data-variant={variant}
                        className="checkbox"
                    >
                        {label}
                    </Checkbox>
                )
            }

            return (
                <Radio
                    htmlFor={id}
                    data-validation={validation}
                    data-variant={variant}
                    className="radio"
                >
                    {label}
                </Radio>
            )
        }

        return (
            <StyledInputCheck className={className}>
                <Input
                    id={id}
                    type={type}
                    disabled={disabled}
                    ref={ref}
                    className={`input input-check input-${variant}`}
                    {...rest}
                />

                {inputFn()}
            </StyledInputCheck>
        )
    }
)

export default InputCheck
