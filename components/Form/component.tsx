/*=============================================== Form ===============================================*/

import React, { forwardRef } from "react"

import Flexbox from "../Flexbox"
import Button from "../Button"

import * as Styles from "./styles"
import { FormProps } from "./types"

const Form = forwardRef(
    (
        {
            children,
            buttonPrimary,
            buttonSecondary,
            isLoading,
            ...props
        }: FormProps,
        ref?: React.ForwardedRef<HTMLFormElement>
    ) => (
        <Styles.StyledForm ref={ref} {...props}>
            {children}

            {(buttonPrimary || buttonSecondary) && (
                <Flexbox gap="xs" alignItems="center">
                    {buttonPrimary && (
                        <Button
                            type="submit"
                            options={{
                                iconLeft: buttonPrimary.iconLeft,
                                iconRight: buttonPrimary.iconRight,
                            }}
                            isLoading={isLoading}
                        >
                            {buttonPrimary.text}
                        </Button>
                    )}

                    {buttonSecondary && (
                        <Button
                            onClick={buttonSecondary.onClick}
                            to={buttonSecondary.to}
                            options={{
                                variant: "text",
                                color: "primary",
                                iconLeft: buttonSecondary.iconLeft,
                                iconRight: buttonSecondary.iconRight,
                            }}
                        >
                            {!buttonSecondary.text && buttonSecondary.to
                                ? "Cancel"
                                : !buttonSecondary.text &&
                                  buttonSecondary.onClick
                                ? "Reset"
                                : buttonSecondary.text || "Cancel"}
                        </Button>
                    )}
                </Flexbox>
            )}
        </Styles.StyledForm>
    )
)

export default Form
