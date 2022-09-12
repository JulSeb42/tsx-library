/*=============================================== Textarea ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "../styles"
import { TextareaProps } from "../types"

const Textarea = forwardRef(
    (
        {
            id,
            disabled,
            name,
            value,
            validation,
            type = "textarea",
            autoFocus,
            accentColor,
            backgroundColor,
            ...props
        }: TextareaProps,
        ref?: React.ForwardedRef<HTMLTextAreaElement>
    ) => (
        <Styles.StyledInput
            as="textarea"
            $type={type}
            $validation={validation?.status}
            id={id}
            disabled={disabled}
            name={name}
            value={value}
            ref={ref}
            autoFocus={autoFocus}
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            {...props}
        />
    )
)

export default Textarea
