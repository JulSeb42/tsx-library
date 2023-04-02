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
            borderRadius = "m",
            buttonsSize = "default",

            ...rest
        }: ButtonGroupProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledButtonGroup
            ref={ref}
            as={as}
            $hasBorders={variant === "transparent" && true}
            $borders={color}
            $borderRadius={borderRadius}
            $buttonsSize={buttonsSize}
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
                            href || to ? (
                                // @ts-expect-error
                                <Styles.StyledButtonIcon
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                    href={href || to}
                                    blank={blank}
                                    isRouterLink={!!to}
                                />
                            ) : (
                                <Styles.StyledButtonIcon
                                    onClick={onClick}
                                    icon={iconOnly}
                                    variant={variant}
                                    color={color}
                                    aria-label={ariaLabel}
                                    iconSize={16}
                                />
                            )
                        ) : href || to ? (
                            // @ts-expect-error
                            <Styles.StyledButton
                                variant={
                                    variant === "transparent" ? "text" : variant
                                }
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                href={href || to}
                                blank={blank}
                                size={buttonsSize}
                                isRouterLink={!!to}
                            >
                                {text}
                            </Styles.StyledButton>
                        ) : (
                            <Styles.StyledButton
                                onClick={onClick}
                                variant={
                                    variant === "transparent" ? "text" : variant
                                }
                                color={color}
                                aria-label={ariaLabel}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                size={buttonsSize}
                            >
                                {text}
                            </Styles.StyledButton>
                        )}

                        {variant === "transparent" &&
                            i !== buttons.length - 1 && (
                                <Styles.Separator $color={color} />
                            )}
                    </Fragment>
                )
            )}
        </Styles.StyledButtonGroup>
    )
)

export default ButtonGroup
