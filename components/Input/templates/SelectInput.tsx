/*=============================================== SelectInput ===============================================*/

import React, { forwardRef } from "react"

import Icon from "../../Icon"
import ChevronDownIcon from "../../../icons/ChevronDownIcon"
import { RightContainer } from "../../InputComponents"

import * as Styles from "../styles"
import { SelectInputProps } from "../types"

const SelectInput = forwardRef(
    (
        {
            id,
            name,
            value,
            type,
            children,
            iconSelect,
            disabled,
            autoFocus,
            accentColor,
            backgroundColor,
            ...props
        }: SelectInputProps,
        ref?: React.ForwardedRef<HTMLSelectElement>
    ) => (
        <Styles.StyledInputContent>
            <Styles.StyledInput
                $type={type}
                id={id}
                name={name}
                value={value}
                as="select"
                ref={ref}
                disabled={disabled}
                autoFocus={autoFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                {...props}
            >
                {children}
            </Styles.StyledInput>

            <RightContainer disabled={disabled}>
                {iconSelect ? (
                    <Icon
                        src={iconSelect}
                        size={16}
                        color={
                            disabled
                                ? "gray"
                                : accentColor
                                ? accentColor
                                : "primary"
                        }
                    />
                ) : (
                    <ChevronDownIcon
                        size={16}
                        color={
                            disabled
                                ? "gray"
                                : accentColor
                                ? accentColor
                                : "primary"
                        }
                    />
                )}
            </RightContainer>
        </Styles.StyledInputContent>
    )
)

export default SelectInput
