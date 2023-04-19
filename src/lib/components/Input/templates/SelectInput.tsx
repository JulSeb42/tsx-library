/*=============================================== SelectInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Icon } from "../../../"
import { ChevronDownIcon } from "../../../icons"
import { RightContainer } from "../../InputComponents"

import { StyledInput, StyledInputContent } from "../styles"
import type { SelectInputProps } from "../types"

const SelectInput = forwardRef(
    (
        {
            children,
            type,
            iconSelect,
            backgroundColor,
            variant = "rounded",
            disabled,
            className,
            ...rest
        }: SelectInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const iconColor = disabled ? "gray" : "primary"

        return (
            <StyledInputContent
                className={classNames("input-content", className)}
            >
                <StyledInput
                    as="select"
                    ref={ref}
                    disabled={disabled}
                    data-variant={variant}
                    data-background={backgroundColor}
                    data-type={type}
                    className={classNames("input input-select", {
                        disabled: disabled,
                    })}
                    {...rest}
                >
                    {children}
                </StyledInput>

                <RightContainer disabled={disabled} variant={variant}>
                    {iconSelect ? (
                        typeof iconSelect === "string" ? (
                            <Icon
                                src={iconSelect}
                                size={16}
                                color={iconColor}
                                className="icon-select"
                            />
                        ) : (
                            iconSelect
                        )
                    ) : (
                        <ChevronDownIcon
                            size={16}
                            color={iconColor}
                            className="icon-select"
                        />
                    )}
                </RightContainer>
            </StyledInputContent>
        )
    }
)

export default SelectInput
