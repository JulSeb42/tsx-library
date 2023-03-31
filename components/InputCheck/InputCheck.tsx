/*=============================================== InputCheck component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { InputCheckProps } from "./types"

const InputCheck = forwardRef(
    (
        {
            type = "radio",
            id,
            label,
            validation,
            iconCheck,
            checkStyle,
            accentColor = "primary",
            disabled,
            ...rest
        }: InputCheckProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => (
        <Styles.StyledInputCheck>
            <Styles.Input
                id={id}
                type={type}
                disabled={disabled}
                $validation={validation}
                $tile={checkStyle === "tile"}
                ref={ref}
                $accentColor={accentColor}
                {...rest}
            />

            {checkStyle === "toggle" ? (
                <Styles.Toggle
                    htmlFor={id}
                    $disabled={disabled}
                    $validation={validation}
                    $accentColor={accentColor}
                >
                    {label}
                </Styles.Toggle>
            ) : checkStyle === "selector" ? (
                <Styles.Selector
                    htmlFor={id}
                    $disabled={disabled}
                    $validation={validation}
                    $accentColor={accentColor}
                >
                    {label}
                </Styles.Selector>
            ) : type === "checkbox" ? (
                <Styles.Checkbox
                    htmlFor={id}
                    $tile={checkStyle === "tile"}
                    $disabled={disabled}
                    $validation={validation}
                    $iconCheck={iconCheck}
                    $accentColor={accentColor}
                >
                    {label}
                </Styles.Checkbox>
            ) : (
                <Styles.Radio
                    htmlFor={id}
                    $tile={checkStyle === "tile"}
                    $disabled={disabled}
                    $validation={validation}
                    $accentColor={accentColor}
                >
                    {label}
                </Styles.Radio>
            )}
        </Styles.StyledInputCheck>
    )
)

export default InputCheck
