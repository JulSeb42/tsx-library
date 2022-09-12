/*=============================================== ListInputs component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { ListInputsProps, ItemProps, ChevronProps } from "./types"

const ListInputs = forwardRef(
    (
        {
            isOpen,
            accentColor,
            backgroundColor,
            validation,
            children,
            variant = "bordered",
            shadow = "s",
            direction = "down",
            ...props
        }: ListInputsProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledListInputs
            $isOpen={isOpen}
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            $shadow={shadow}
            $validation={validation}
            $variant={variant}
            ref={ref}
            $direction={direction}
            {...props}
        >
            {children}
        </Styles.StyledListInputs>
    )
)

const ListItem = forwardRef(
    (
        {
            accentColor,
            backgroundColor,
            validation,
            children,
            onClick,
            isActive,
            readOnly,
            ...props
        }: ItemProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.Item
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            $validation={validation}
            $isActive={isActive}
            onClick={onClick}
            ref={ref}
            $readOnly={readOnly}
            {...props}
        >
            {children}
        </Styles.Item>
    )
)

const Chevron = forwardRef(
    (
        { isOpen, color, icon, hasAnimation, ...props }: ChevronProps,
        ref?: React.ForwardedRef<HTMLOrSVGElement>
    ) => (
        <>
            {icon ? (
                <Styles.StyledIcon
                    src={icon}
                    size={16}
                    color={color}
                    $hasAnimation={hasAnimation}
                    $isOpen={isOpen}
                    ref={ref}
                />
            ) : (
                <Styles.StyledChevronDown
                    size={16}
                    color={color}
                    $isOpen={isOpen}
                    ref={ref}
                    {...props}
                />
            )}
        </>
    )
)

export { ListInputs, ListItem, Chevron }
