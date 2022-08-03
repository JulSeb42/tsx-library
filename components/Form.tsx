/*=============================================== Form ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Button from "./Button"

/*==================== Component ====================*/

const Form = ({
    children,
    buttonPrimary,
    buttonSecondary = undefined,
    buttonSecondaryText = buttonSecondary === "cancel" ? "Cancel" : buttonSecondary === "reset" ? "Reset" : "",
    buttonSecondaryTo,
    onClickSecondary,
    iconLeftPrimary,
    iconRightPrimary,
    iconLeftSecondary,
    iconRightSecondary,
    ...props
}: Props) => (
    <Container {...props}>
        {children}

        {(buttonPrimary || buttonSecondary) && (
            <Flexbox gap="xs" alignItems="center">
                {buttonPrimary && (
                    <Button type="submit" iconLeft={iconLeftPrimary} iconRight={iconRightPrimary}>
                        {buttonPrimary}
                    </Button>
                )}

                {buttonSecondary && (
                    <Button
                        type={buttonSecondary === "reset" ? "reset" : buttonSecondaryTo ? undefined : "button"}
                        to={buttonSecondaryTo && buttonSecondaryTo}
                        buttonStyle="text"
                        color="primary"
                        onClick={onClickSecondary}
                        iconLeft={iconLeftSecondary}
                        iconRight={iconRightSecondary}
                    >
                        {buttonSecondaryText}
                    </Button>
                )}
            </Flexbox>
        )}
    </Container>
)

export default Form

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLFormElement> {
    buttonPrimary?: string
    buttonSecondary?: "cancel" | "reset" | undefined
    buttonSecondaryText?: string
    buttonSecondaryTo?: string
    onClickSecondary?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconLeftPrimary?: string
    iconRightPrimary?: string
    iconLeftSecondary?: string
    iconRightSecondary?: string
}

/*==================== Styles ====================*/

const Container = styled.form`
    ${Mixins.Grid({
        $gap: "m",
    })};
`
