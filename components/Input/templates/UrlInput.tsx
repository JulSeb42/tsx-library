/*=============================================== UrlInput ===============================================*/

import React, { forwardRef } from "react"

import {
    IconComponent,
    ValidationComponent,
    RightContainer,
} from "../../InputComponents"

import * as Styles from "../styles"
import { UrlInputProps } from "../types"

const UrlInput = forwardRef(
    (
        {
            id,
            disabled,
            value,
            name,
            validation,
            icon,
            type,
            showHttp = true,
            autoFocus,
            accentColor,
            backgroundColor,
            ...props
        }: UrlInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => (
        <Styles.StyledInputContent>
            {icon && (
                <IconComponent
                    icon={icon}
                    disabled={disabled}
                    accentColor={accentColor}
                    validation={validation?.status}
                />
            )}

            {showHttp && (
                <Styles.UrlContainer $hasIcon={!!icon} $disabled={disabled}>
                    http://
                </Styles.UrlContainer>
            )}

            <Styles.StyledInput
                id={id}
                disabled={disabled}
                value={value}
                name={name}
                $showHttp={showHttp}
                $type={type}
                $validation={validation?.status}
                type={type}
                ref={ref}
                $hasIcon={!!icon}
                autoFocus={autoFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                {...props}
            />

            {validation && (
                <RightContainer disabled={disabled}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            )}
        </Styles.StyledInputContent>
    )
)

export default UrlInput
