/*=============================================== TextInput ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import {
    RightContainer,
    IconComponent,
    ValidationComponent,
} from "../../InputComponents"

import * as Styles from "../styles"
import type { TextInputProps } from "../types"

const TextInput = forwardRef(
    (
        {
            type,
            maxLength,
            validation,
            icon,
            accentColor = "primary",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            ...rest
        }: TextInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputFn = () => (
            <Styles.StyledInput
                ref={ref}
                type={type}
                maxLength={maxLength}
                $type={type}
                $validation={getValidationStatus}
                $hasIcon={!!icon}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $variant={variant}
                disabled={disabled}
                {...rest}
            />
        )

        return icon || validation ? (
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

                {inputFn()}

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </Styles.StyledInputContent>
        ) : (
            inputFn()
        )
    }
)

export default TextInput
