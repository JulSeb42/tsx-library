/*=============================================== Form component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Flexbox, Button } from "../../"

import * as Styles from "./styles"
import type { FormProps } from "./types"

const Form = forwardRef(
    (
        {
            buttonPrimary,
            accentColor = "primary",
            isLoading,
            disabled,
            gap = "m",
            buttonSecondary,
            children,
            maxWidth,
            ...rest
        }: FormProps,
        ref?: ForwardedRef<HTMLFormElement>
    ) => (
        <Styles.StyledForm ref={ref} $gap={gap} $maxWidth={maxWidth} {...rest}>
            {children}

            {(buttonPrimary || buttonSecondary) && (
                <Flexbox>
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
                        >
                            {typeof buttonPrimary === "object"
                                ? buttonPrimary.text
                                : buttonPrimary}
                        </Button>
                    )}

                    {buttonSecondary &&
                        (buttonSecondary.href ? (
                            <Button
                                href={buttonSecondary.href}
                                variant="text"
                                color={accentColor}
                                icons={{
                                    left: buttonSecondary.iconLeft,
                                    right: buttonSecondary.iconRight,
                                }}
                            >
                                {buttonSecondary.text || "Cancel"}
                            </Button>
                        ) : (
                            <Button
                                onClick={buttonSecondary.onClick}
                                variant="text"
                                color={accentColor}
                                icons={{
                                    left: buttonSecondary.iconLeft,
                                    right: buttonSecondary.iconRight,
                                }}
                            >
                                {buttonSecondary.text || "Reset"}
                            </Button>
                        ))}
                </Flexbox>
            )}
        </Styles.StyledForm>
    )
)

export default Form
