// Imports
import React from "react"

import Flexbox from "../Flexbox"
import Button from "../Button"

import { Container } from "./styles"

import { props } from "./types"

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
                <Flexbox gap="xs">
                    {btnPrimary && (
                        <Button
                            color={colorPrimary}
                            btnStyle="plain"
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
                            type="button"
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
                            type="reset"
                            btnStyle="text"
                            color={colorReset}
                            iconLeft={iconLeftReset}
                            iconRight={iconRightPrimary}
                            onClick={onClickReset}
                        >
                            {textBtnReset
                                ? textBtnReset
                                : typeof btnReset === "string"
                                ? btnReset
                                : typeof btnReset === "boolean"
                                ? "Reset"
                                : ""}
                        </Button>
                    )}
                </Flexbox>
            )}
        </Container>
    )
}

export default Form
