// Packages
import React from "react"

// Components
import ButtonsContainer from "../ButtonsContainer"
import Button from "../Button"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Form: React.FC<props> = ({
    children,
    btnPrimary,
    colorPrimary = "primary",
    iconLeftPrimary,
    iconRightPrimary,
    loading,
    btnCancel,
    textBtnCancel = "Cancel",
    colorCancel = "primary",
    iconLeftCancel,
    iconRightCancel,
    btnReset,
    textBtnReset,
    colorReset = "primary",
    iconLeftReset,
    iconRightReset,
    onClickReset,
    ...props
}) => {
    return (
        <Container {...props}>
            {children}

            {(btnPrimary || btnCancel || btnReset) && (
                <ButtonsContainer>
                    {btnPrimary && (
                        <Button
                            btnStyle="plain"
                            color={colorPrimary}
                            iconLeft={iconLeftPrimary}
                            iconRight={iconRightPrimary}
                            type="submit"
                            loading={loading}
                            disabled={loading}
                        >
                            {btnPrimary}
                        </Button>
                    )}

                    {btnCancel && (
                        <Button
                            btnStyle="text"
                            color={colorCancel}
                            iconLeft={iconLeftCancel}
                            iconRight={iconRightCancel}
                            to={btnCancel}
                        >
                            {textBtnCancel}
                        </Button>
                    )}

                    {(btnReset || textBtnReset) && (
                        <Button
                            btnStyle="text"
                            color={colorReset}
                            iconLeft={iconLeftReset}
                            iconRight={iconRightReset}
                            type="reset"
                            onClick={onClickReset}
                        >
                            {textBtnReset ? textBtnReset : "Reset"}
                        </Button>
                    )}
                </ButtonsContainer>
            )}
        </Container>
    )
}

export default Form
