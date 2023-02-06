/*=============================================== ButtonGroup component ===============================================*/

import React, { forwardRef } from "react"

import { uuid } from "../../"

import * as Styles from "./styles"
import { ButtonGroupProps } from "./types"

const ButtonGroup = forwardRef(
    (
        {
            as,
            variant,
            color,
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
                    },
                    i
                ) => (
                    <React.Fragment key={uuid()}>
                        {iconOnly ? (
                            <Styles.StyledButtonIcon
                                icon={iconOnly}
                                to={to}
                                onClick={onClick}
                                variant={variant}
                                color={color}
                                aria-label={ariaLabel}
                                iconSize={16}
                                // @ts-expect-error
                                target={to && blank ? "_blank" : undefined}
                                rel={
                                    to && blank
                                        ? "noreferrer noopener"
                                        : undefined
                                }
                            />
                        ) : (
                            <Styles.StyledButton
                                to={to}
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
                                // @ts-expect-error
                                target={to && blank ? "_blank" : undefined}
                                rel={
                                    to && blank
                                        ? "noreferrer noopener"
                                        : undefined
                                }
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
