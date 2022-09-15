/*=============================================== FileInput ===============================================*/

import React, { forwardRef } from "react"

import { ValidationComponent, RightContainer } from "../../InputComponents"

import * as Styles from "../styles"
import { FileInputProps } from "../types"

const FileInput = forwardRef(
    (
        {
            id,
            value,
            type = "file",
            validation,
            name,
            disabled,
            autoFocus,
            backgroundColor,
            accentColor,
            variant = "rounded",
            ...props
        }: FileInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const inputFunction = () => (
            <Styles.StyledInput
                id={id}
                value={value}
                type={type}
                $validation={validation?.status}
                name={name}
                disabled={disabled}
                autoFocus={autoFocus}
                ref={ref}
                $type={type}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $variant={variant}
                {...props}
            />
        )

        return validation ? (
            <Styles.StyledInputContent>
                {inputFunction()}

                <RightContainer disabled={disabled} variant={variant}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            </Styles.StyledInputContent>
        ) : (
            inputFunction()
        )
    }
)

export default FileInput
