/*=============================================== ButtonGroup component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { uuid } from "../../"

import {
    StyledButton,
    StyledButtonGroup,
    Separator,
    StyledButtonIcon,
} from "./styles"
import type { ButtonGroupProps } from "./types"

const ButtonGroup = forwardRef(
    (
        {
            as,
            variant = "plain",
            color = "primary",
            buttons,
            buttonsSize = "default",
            className,
            ...rest
        }: ButtonGroupProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledButtonGroup
            ref={ref}
            as={as}
            className={classNames(
                { small: buttonsSize === "small" },
                className
            )}
            $hasBorders={!!(variant === "transparent")}
            $color={color}
            {...rest}
        >
            {buttons.map(
                (
                    {
                        text,
                        iconLeft,
                        iconRight,
                        onClick,
                        iconOnly,
                        blank,
                        "aria-label": ariaLabel,
                        href,
                        to,
                    },
                    i
                ) => (
                    <Fragment key={uuid()}>
                        {iconOnly ? (
                            href ? (
                                <StyledButtonIcon
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    href={href}
                                    blank={blank}
                                    className="button"
                                    type="button"
                                />
                            ) : to ? (
                                <StyledButtonIcon
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    to={to}
                                    blank={blank}
                                    className="button"
                                    type="button"
                                />
                            ) : (
                                <StyledButtonIcon
                                    onClick={onClick}
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    className="button"
                                    type="button"
                                />
                            )
                        ) : href ? (
                            <StyledButton
                                variant={variant}
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                href={href}
                                blank={blank}
                                size={buttonsSize}
                                className="button"
                                type="button"
                            >
                                {text}
                            </StyledButton>
                        ) : to ? (
                            <StyledButton
                                variant={variant}
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                to={to}
                                blank={blank}
                                size={buttonsSize}
                                className="button"
                                type="button"
                            >
                                {text}
                            </StyledButton>
                        ) : (
                            <StyledButton
                                onClick={onClick}
                                variant={variant}
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                size={buttonsSize}
                                className="button"
                                type="button"
                            >
                                {text}
                            </StyledButton>
                        )}

                        {variant === "transparent" &&
                            i !== buttons.length - 1 && (
                                <Separator
                                    className="separator"
                                    $color={color}
                                />
                            )}
                    </Fragment>
                )
            )}
        </StyledButtonGroup>
    )
)

export default ButtonGroup
