/*=============================================== FileInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { RightContainer, ValidationComponent } from "../../InputComponents"

import * as Styles from "../styles"
import type { FileInputProps } from "../types"

const FileInput = forwardRef(
    (
        {
            type = "file",
            backgroundColor,
            accentColor = "primary",
            variant = "rounded",
            validation,
            disabled,
            ...rest
        }: FileInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputFn = () => (
            <Styles.StyledInput
                ref={ref}
                type={type}
                $validation={getValidationStatus}
                $type={type}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $variant={variant}
                disabled={disabled}
                {...rest}
            />
        )

        return validation ? (
            <Styles.StyledInputContent>
                {inputFn()}

                <RightContainer disabled={disabled} variant={variant}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            </Styles.StyledInputContent>
        ) : (
            inputFn()
        )
    }
)

export default FileInput
