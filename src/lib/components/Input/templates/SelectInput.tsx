/*=============================================== SelectInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon } from "../../../"
import { ChevronDownIcon } from "../../../icons"
import { RightContainer } from "../../InputComponents"

import * as Styles from "../styles"
import type { SelectInputProps } from "../types"

const SelectInput = forwardRef(
    (
        {
            children,
            type,
            iconSelect,
            accentColor = "primary",
            backgroundColor,
            variant = "rounded",
            disabled,
            ...rest
        }: SelectInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const iconColor = disabled ? "gray" : accentColor

        return (
            <Styles.StyledInputContent>
                <Styles.StyledInput
                    $type={type}
                    as="select"
                    ref={ref}
                    disabled={disabled}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...rest}
                >
                    {children}
                </Styles.StyledInput>

                <RightContainer disabled={disabled} variant={variant}>
                    {iconSelect ? (
                        typeof iconSelect === "string" ? (
                            <Icon
                                src={iconSelect}
                                size={16}
                                color={iconColor}
                            />
                        ) : (
                            iconSelect
                        )
                    ) : (
                        <ChevronDownIcon size={16} color={iconColor} />
                    )}
                </RightContainer>
            </Styles.StyledInputContent>
        )
    }
)

export default SelectInput
