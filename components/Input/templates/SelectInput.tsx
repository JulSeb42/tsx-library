/*=============================================== SelectInput ===============================================*/

import React, { forwardRef } from "react"

import { Icon } from "../../../"
import { RightContainer } from "../../InputComponents"
import ChevronDownIcon from "../../../icons/ChevronDownIcon"

import * as Styles from "../styles"
import { SelectInputProps } from "../types"

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
        ref?: React.ForwardedRef<HTMLInputElement>
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
                        <Icon src={iconSelect} size={16} color={iconColor} />
                    ) : (
                        <ChevronDownIcon size={16} color={iconColor} />
                    )}
                </RightContainer>
            </Styles.StyledInputContent>
        )
    }
)

export default SelectInput
