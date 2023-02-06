/*=============================================== Textarea ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "../styles"
import { TextareaProps } from "../types"

const Textarea = forwardRef(
    (
        {
            validation,
            type = "textarea",
            accentColor = "primary",
            backgroundColor,
            ...rest
        }: TextareaProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        return (
            <Styles.StyledInput
                ref={ref}
                as="textarea"
                $type={type}
                $validation={getValidationStatus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                {...rest}
            />
        )
    }
)

export default Textarea
