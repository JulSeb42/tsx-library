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
            iconSize,
            variant = "rounded",
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
                    size={iconSize}
                    variant={variant}
                />
            )}

            {showHttp && (
                <Styles.UrlContainer
                    $hasIcon={!!icon}
                    $disabled={disabled}
                    $variant={variant}
                >
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
                $variant={variant}
                {...props}
            />

            {validation && (
                <RightContainer disabled={disabled} variant={variant}>
                    <ValidationComponent validation={validation} />
                </RightContainer>
            )}
        </Styles.StyledInputContent>
    )
)

export default UrlInput
