// Packages
import React from "react"
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"
import ButtonsContainer from "./ButtonsContainer"
import Button from "./Button"

// Types
interface props extends React.HTMLAttributes<HTMLFormElement> {
    btnPrimary?: string
    btnCancel?: string
    btnReset?: string
    colorPrimary?: string
    iconLeftPrimary?: string
    iconRightPrimary?: string
    loading?: boolean
    colorCancel?: string
    iconLeftCancel?: string
    iconRightCancel?: string
    textBtnCancel?: string
    textBtnReset?: string
    colorReset?: string
    iconLeftReset?: string
    iconRightReset?: string
    onClickReset?: (event: React.MouseEvent<HTMLElement>) => void
}

// Styles
const Container = styled.form`
    display: grid;
    gap: ${Variables.Spacers.S};
`

const Form: React.FC<props> = props => {
    return (
        <Container {...props}>
            {props.children}

            {(props.btnPrimary || props.btnCancel || props.btnReset) && (
                <ButtonsContainer>
                    {props.btnPrimary && (
                        <Button
                            btnStyle="plain"
                            color={props.colorPrimary || "primary"}
                            iconLeft={props.iconLeftPrimary}
                            iconRight={props.iconRightPrimary}
                            type="submit"
                            loading={props.loading}
                            disabled={props.loading}
                        >
                            {props.btnPrimary}
                        </Button>
                    )}

                    {props.btnCancel && (
                        <Button
                            btnStyle="text"
                            color={props.colorCancel || "primary"}
                            iconLeft={props.iconLeftCancel}
                            iconRight={props.iconRightCancel}
                            to={props.btnCancel}
                        >
                            {props.textBtnCancel || "Cancel"}
                        </Button>
                    )}

                    {(props.btnReset || props.textBtnReset) && (
                        <Button
                            btnStyle="text"
                            color={props.colorReset || "primary"}
                            iconLeft={props.iconLeftReset}
                            iconRight={props.iconRightReset}
                            type="reset"
                            onClick={props.onClickReset}
                        >
                            {props.textBtnReset || "Reset"}
                        </Button>
                    )}
                </ButtonsContainer>
            )}
        </Container>
    )
}

export default Form
