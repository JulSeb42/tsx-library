/*=============================================== ButtonGroup component ===============================================*/

import React, { forwardRef } from "react"

import { uuid } from "../../"

import * as Styles from "./styles"
import { ButtonGroupProps } from "./types"

const ButtonGroup = forwardRef(
    (
        {
            as,
            variant = "plain",
            color = "primary",
            buttons,
            borderRadius = "m",
            ...rest
        }: ButtonGroupProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledButtonGroup
            ref={ref}
            as={as}
            $hasBorders={variant === "transparent" && true}
            $borders={color}
            $borderRadius={borderRadius}
            {...rest}
        >
            {buttons.map(
                (
                    {
                        text,
                        iconLeft,
                        iconRight,
                        onClick,
                        to,
                        iconOnly,
                        blank,
                        "aria-label": ariaLabel,
                        href,
                    },
                    i
                ) => (
                    <React.Fragment key={uuid()}>
                        {iconOnly ? (
                            href ? (
                                <Styles.StyledButtonIcon
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    href={href}
                                    blank={blank}
                                />
                            ) : onClick ? (
                                <Styles.StyledButtonIcon
                                    onClick={onClick}
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                />
                            ) : (
                                <Styles.StyledButtonIcon
                                    icon={iconOnly}
                                    to={to}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                />
                            )
                        ) : href ? (
                            <Styles.StyledButton
                                variant={
                                    variant === "transparent" ? "text" : "plain"
                                }
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                href={href}
                                blank={blank}
                            >
                                {text}
                            </Styles.StyledButton>
                        ) : onClick ? (
                            <Styles.StyledButton
                                onClick={onClick}
                                variant={
                                    variant === "transparent" ? "text" : "plain"
                                }
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                            >
                                {text}
                            </Styles.StyledButton>
                        ) : (
                            <Styles.StyledButton
                                to={to}
                                variant={
                                    variant === "transparent" ? "text" : "plain"
                                }
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                            >
                                {text}
                            </Styles.StyledButton>
                        )}

                        {variant === "transparent" &&
                            i !== buttons.length - 1 && (
                                <Styles.Separator $color={color} />
                            )}
                    </React.Fragment>
                )
            )}
        </Styles.StyledButtonGroup>
    )
)

export default ButtonGroup
