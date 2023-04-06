/*=============================================== SearchInput ===============================================*/

import React, { forwardRef, useRef } from "react"
import type { ForwardedRef } from "react"

import { ButtonIcon, Key, useKeyPress } from "../../../"
import { CloseIcon } from "../../../icons"
import { RightContainer, IconComponent } from "../../InputComponents"

import * as Styles from "../styles"
import type { SearchInputProps } from "../types"

const SearchInput = forwardRef(
    (
        {
            icon,
            type = "search",
            clearSearch,
            iconClear,
            accentColor = "primary",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            value,
            focusKeys,
            showKeys,
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
            <Styles.StyledInputContent>
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
                        size={iconSize}
                        variant={variant}
                    />
                )}

                <Styles.StyledInput
                    type={type}
                    ref={ref || focusRef}
                    $type={type}
                    $hasIcon={!!icon}
                    disabled={disabled}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    value={value}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {typeof value === "string" && value.length > 0 && (
                        <ButtonIcon
                            icon={iconClear || <CloseIcon size={20} />}
                            variant="transparent"
                            type="button"
                            size={24}
                            onClick={clearSearch}
                            disabled={disabled}
                            color={accentColor}
                            borderRadius="xs"
                        />
                    )}

                    {focusKeys && showKeys && keyArr && (
                        <Key
                            keys={keyArr}
                            borderColor={accentColor}
                            backgroundColor={accentColor}
                        />
                    )}
                </RightContainer>
            </Styles.StyledInputContent>
        )
    }
)

export default SearchInput
