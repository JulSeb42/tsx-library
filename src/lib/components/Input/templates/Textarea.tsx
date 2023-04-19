/*=============================================== Textarea ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { StyledInput } from "../styles"
import type { TextareaProps } from "../types"

const Textarea = forwardRef(
    (
        {
            validation,
            type = "textarea",
            backgroundColor,
            className,
            ...rest
        }: TextareaProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        return (
            <StyledInput
                ref={ref}
                as="textarea"
                data-background={backgroundColor}
                data-type={type}
                data-validation={getValidationStatus}
                className={classNames("input input-textarea", className)}
                {...rest}
            />
        )
    }
)

export default Textarea
