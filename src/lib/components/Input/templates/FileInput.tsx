/*=============================================== FileInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { RightContainer, ValidationComponent } from "../../InputComponents"

import { StyledInput, StyledInputContent } from "../styles"
import type { FileInputProps } from "../types"

const FileInput = forwardRef(
    (
        {
            type = "file",
            backgroundColor,
            variant = "rounded",
            validation,
            disabled,
            className,
            ...rest
        }: FileInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const inputFn = () => (
            <StyledInput
                ref={ref}
                type={type}
                disabled={disabled}
                data-variant={variant}
                data-background={backgroundColor}
                data-type={type}
                data-validation={getValidationStatus}
                className={classNames(
                    "input input-file",
                    !validation && className
                )}
                {...rest}
            />
        )

        return validation ? (
            <StyledInputContent
                className={classNames("input-content", className)}
            >
                {inputFn()}

                <RightContainer disabled={disabled} variant={variant}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            </StyledInputContent>
        ) : (
            inputFn()
        )
    }
)

export default FileInput
