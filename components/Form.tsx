/*=============================================== Form ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Button from "./Button"

/*==================== Component ====================*/

const Form = ({ children, buttonPrimary, buttonSecondary, isLoading, ...props }: Props) => (
    <Container {...props}>
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
                            : !buttonSecondary.text && buttonSecondary.onClick
                            ? "Reset"
                            : buttonSecondary.text || "Cancel"}
                    </Button>
                )}
            </Flexbox>
        )}
    </Container>
)

export default Form

/*==================== Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLFormElement> {
    buttonPrimary?: {
        text: string
        iconLeft?: string
        iconRight?: string
    }
    isLoading?: boolean
}

interface Possible1 extends BaseProps {
    buttonSecondary?: {
        text?: string
        iconLeft?: string
        iconRight?: string
        to: string
        onClick?: never
    }
}

interface Possible2 extends BaseProps {
    buttonSecondary?: {
        text?: string
        iconLeft?: string
        iconRight?: string
        to?: never
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    }
}

type Props = Possible1 | Possible2

/*==================== Styles ====================*/

const Container = styled.form`
    ${Mixins.Grid({
        $gap: "m",
    })};
`
