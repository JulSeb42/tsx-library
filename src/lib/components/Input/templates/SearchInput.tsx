/*=============================================== SearchInput ===============================================*/

import React, { forwardRef, useRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Key, useKeyPress } from "../../../"
import { CloseIcon } from "../../../icons"
import {
    RightContainer,
    IconComponent,
    ButtonRightInputs,
} from "../../InputComponents"

import { StyledInputContent, StyledInput } from "../styles"
import type { SearchInputProps } from "../types"

const SearchInput = forwardRef(
    (
        {
            icon,
            type = "search",
            clearSearch,
            iconClear,
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            value,
            focusKeys,
            showKeys,
            className,
            ...rest
        }: SearchInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const focusRef = useRef<HTMLInputElement>(null)

        const handleFocus = () => focusRef?.current?.focus()

        const keys = focusKeys ? focusKeys : [""]
        useKeyPress(() => handleFocus(), keys)

        const keyArr = focusKeys?.map(key =>
            key.includes("Key")
                ? key.replace("Key", "")
                : key === "Command"
                ? "⌘"
                : key === "Enter"
                ? "↵"
                : key === "Control"
                ? "Ctrl"
                : key
        )

        return (
            <StyledInputContent
                className={classNames("input-content", className)}
            >
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        size={iconSize}
                        variant={variant}
                        backgroundColor={backgroundColor}
                    />
                )}

                <StyledInput
                    type={type}
                    ref={ref || focusRef}
                    disabled={disabled}
                    value={value}
                    data-variant={variant}
                    data-background={backgroundColor}
                    data-type={type}
                    className={classNames(
                        { "with-icon": !!icon },
                        "input input-search"
                    )}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {typeof value === "string" && value.length > 0 && (
                        <ButtonRightInputs
                            icon={iconClear || <CloseIcon size={20} />}
                            onClick={clearSearch}
                            disabled={disabled}
                            className="clear-button"
                        />
                    )}

                    {focusKeys && showKeys && keyArr && (
                        <Key
                            keys={keyArr}
                            accentColor="primary"
                            className="keys"
                        />
                    )}
                </RightContainer>
            </StyledInputContent>
        )
    }
)

export default SearchInput
