/*=============================================== ListInputs component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { StyledListInputs, Item } from "./styles"
import type { ListInputsProps, ListInputsItemProps } from "./types"

export const ListInputs = forwardRef(
    (
        {
            isOpen,
            backgroundColor,
            validation,
            children,
            direction = "down",
            className,
            ...rest
        }: ListInputsProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledListInputs
            ref={ref}
            data-direction={direction}
            data-background={backgroundColor}
            data-validation={validation}
            className={classNames({ open: isOpen }, className, "list-inputs")}
            {...rest}
        >
            {children}
        </StyledListInputs>
    )
)

export const ListItem = forwardRef(
    (
        {
            backgroundColor,
            validation,
            children,
            isActive,
            readOnly,
            className,
            ...rest
        }: ListInputsItemProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => (
        <Item
            ref={ref}
            className={classNames(
                { "read-only": readOnly },
                { active: isActive },
                className,
                "list-inputs-item"
            )}
            data-validation={validation}
            data-background={backgroundColor}
            {...rest}
        >
            {children}
        </Item>
    )
)
