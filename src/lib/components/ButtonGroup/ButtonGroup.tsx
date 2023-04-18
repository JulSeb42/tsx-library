/*=============================================== ButtonGroup component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"

import { uuid } from "../../"

import * as Styles from "./styles"
import type { ButtonGroupProps } from "./types"

const ButtonGroup = forwardRef(
    (
        {
            as,
            variant = "plain",
            color = "primary",
            buttons,
            buttonsSize = "default",
            ...rest
        }: ButtonGroupProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledButtonGroup
            ref={ref}
            as={as}
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
                                <Styles.StyledButtonIcon
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    href={href}
                                    blank={blank}
                                    className="button"
                                />
                            ) : to ? (
                                <Styles.StyledButtonIcon
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    to={to}
                                    blank={blank}
                                    className="button"
                                />
                            ) : (
                                <Styles.StyledButtonIcon
                                    onClick={onClick}
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    className="button"
                                />
                            )
                        ) : href ? (
                            <Styles.StyledButton
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
                            >
                                {text}
                            </Styles.StyledButton>
                        ) : to ? (
                            <Styles.StyledButton
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
                            >
                                {text}
                            </Styles.StyledButton>
                        ) : (
                            <Styles.StyledButton
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
                            >
                                {text}
                            </Styles.StyledButton>
                        )}

                        {variant === "transparent" &&
                            i !== buttons.length - 1 && (
                                <Styles.Separator
                                    className="separator"
                                    $color={color}
                                />
                            )}
                    </Fragment>
                )
            )}
        </Styles.StyledButtonGroup>
    )
)

export default ButtonGroup
