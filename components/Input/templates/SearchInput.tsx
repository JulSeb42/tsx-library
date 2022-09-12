/*=============================================== SearchInput ===============================================*/

import React, { forwardRef } from "react"

import { IconComponent, RightContainer } from "../../InputComponents"
import Button from "../../Button"
import CloseIcon from "../../../icons/CloseIcon"

import * as Styles from "../styles"
import { SearchInputProps } from "../types"

const SearchInput = forwardRef(
    (
        {
            icon,
            disabled,
            value,
            name,
            id,
            type = "search",
            clearSearch,
            iconClear,
            autoFocus,
            accentColor,
            backgroundColor,
            ...props
        }: SearchInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const buttonProps = {
            noPadding: true,
            onClick: clearSearch,
            disabled: disabled,
            color: accentColor,
        }

        return (
            <Styles.StyledInputContent>
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
                    />
                )}

                <Styles.StyledInput
                    value={value}
                    name={name}
                    id={id}
                    type={type}
                    ref={ref}
                    $type={type}
                    $hasIcon={!!icon}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    {...props}
                />

                <RightContainer disabled={disabled}>
                    {typeof value === "string" &&
                        value.length > 0 &&
                        (iconClear ? (
                            <Button
                                icons={{ only: iconClear }}
                                variant="text"
                                {...buttonProps}
                            />
                        ) : (
                            <Button
                                libicon={{ only: <CloseIcon size={16} /> }}
                                variant="text"
                                {...buttonProps}
                            />
                        ))}
                </RightContainer>
            </Styles.StyledInputContent>
        )
    }
)

export default SearchInput
