/*=============================================== Form component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Flexbox, Button } from "../.."

import * as Styles from "./styles"
import type { FormProps } from "./types"

const Form = forwardRef(
    (
        {
            buttonPrimary,
            accentColor = "primary",
            isLoading,
            disabled,
            buttonSecondary,
            children,
            ...rest
        }: FormProps,
        ref?: ForwardedRef<HTMLFormElement>
    ) => {
        return (
            <Styles.StyledForm ref={ref} {...rest}>
                {children}

                {(buttonPrimary || buttonSecondary) && (
                    <Flexbox className="form-buttons-container">
                        {buttonPrimary && (
                            <Button
                                type="submit"
                                variant="plain"
                                color={accentColor}
                                icons={{
                                    left:
                                        typeof buttonPrimary === "object"
                                            ? buttonPrimary.iconLeft
                                            : undefined,
                                    right:
                                        typeof buttonPrimary === "object"
                                            ? buttonPrimary.iconRight
                                            : undefined,
                                }}
                                isLoading={isLoading}
                                disabled={disabled}
                                className="form-button-primary"
                            >
                                {typeof buttonPrimary === "object"
                                    ? buttonPrimary.text
                                    : buttonPrimary}
                            </Button>
                        )}

                        {buttonSecondary &&
                            (buttonSecondary.to ? (
                                <Button
                                    variant="transparent"
                                    color={accentColor}
                                    icons={{
                                        left: buttonSecondary.iconLeft,
                                        right: buttonSecondary.iconRight,
                                    }}
                                    to={buttonSecondary.to}
                                    className="form-button-secondary"
                                >
                                    {buttonSecondary.text || "Cancel"}
                                </Button>
                            ) : (
                                buttonSecondary.onClick && (
                                    <Button
                                        variant="transparent"
                                        color={accentColor}
                                        icons={{
                                            left: buttonSecondary.iconLeft,
                                            right: buttonSecondary.iconRight,
                                        }}
                                        onClick={buttonSecondary.onClick}
                                        className="form-button-secondary"
                                    >
                                        {buttonSecondary.text || "Reset"}
                                    </Button>
                                )
                            ))}
                    </Flexbox>
                )}
            </Styles.StyledForm>
        )
    }
)

export default Form
