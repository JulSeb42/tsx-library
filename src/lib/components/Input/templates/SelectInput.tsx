/*=============================================== SelectInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { CaretDownIcon } from "../../../icons"
import { RightContainer, ButtonRightInputs } from "../../InputComponents"

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
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledInputContent
                className={classNames("input-content", className)}
                ref={ref}
            >
                <StyledInput
                    as="select"
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
                    <ButtonRightInputs
                        icon={iconSelect || <CaretDownIcon size={16} />}
                        disabled={disabled}
                        className="icon-select"
                    />
                </RightContainer>
            </StyledInputContent>
        )
    }
)

export default SelectInput
