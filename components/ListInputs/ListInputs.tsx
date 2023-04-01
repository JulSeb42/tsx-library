/*=============================================== ListInputs component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type {
    ListInputsProps,
    ListInputsItemProps,
    ListInputsChevronProps,
} from "./types"

export const ListInputs = forwardRef(
    (
        {
            isOpen,
            accentColor = "primary",
            backgroundColor,
            validation,
            children,
            variant = "bordered",
            shadow = "s",
            direction = "down",
            ...rest
        }: ListInputsProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledListInputs
            ref={ref}
            $isOpen={isOpen}
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            $shadow={shadow}
            $validation={validation}
            $variant={variant}
            $direction={direction}
            {...rest}
        >
            {children}
        </Styles.StyledListInputs>
    )
)

export const ListItem = forwardRef(
    (
        {
            accentColor = "primary",
            backgroundColor,
            validation,
            children,
            isActive,
            readOnly,
            ...rest
        }: ListInputsItemProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.Item
            ref={ref}
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            $validation={validation}
            $isActive={isActive}
            $readOnly={readOnly}
            {...rest}
        >
            {children}
        </Styles.Item>
    )
)

export const Chevron = forwardRef(
    (
        { isOpen, color, icon, hasAnimation, ...rest }: ListInputsChevronProps,
        ref?: ForwardedRef<HTMLOrSVGElement>
    ) => {
        const props = {
            size: 16,
            color,
            ref,
            $isOpen: isOpen,
        }

        return icon ? (
            typeof icon === "string" ? (
                <Styles.StyledIcon
                    src={icon}
                    $hasAnimation={hasAnimation}
                    {...props}
                />
            ) : (
                icon
            )
        ) : (
            <Styles.StyledChevronDown {...props} {...rest} />
        )
    }
)
