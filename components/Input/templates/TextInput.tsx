/*=============================================== TextInput ===============================================*/

import React, { forwardRef } from "react"

import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../../InputComponents"

import * as Styles from "../styles"
import { TextInputProps } from "../types"

const TextInput = forwardRef(
    (
        {
            id,
            type,
            maxLength,
            validation,
            icon,
            value,
            name,
            disabled,
            autoFocus,
            accentColor = "primary",
            backgroundColor,
            ...props
        }: TextInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const inputFunction = () => (
            <Styles.StyledInput
                id={id}
                type={type}
                maxLength={maxLength}
                value={value}
                name={name}
                disabled={disabled}
                $type={type}
                $validation={validation?.status}
                ref={ref}
                $hasIcon={!!icon}
                autoFocus={autoFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                {...props}
            />
        )

        return icon || validation ? (
            <Styles.StyledInputContent>
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
                        validation={validation?.status}
                    />
                )}

                {inputFunction()}

                {validation && (
                    <RightContainer disabled={disabled}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </Styles.StyledInputContent>
        ) : (
            inputFunction()
        )
    }
)

export default TextInput
