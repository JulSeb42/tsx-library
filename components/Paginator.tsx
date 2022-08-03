/*=============================================== Paginator ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Input from "./Input"
import Icon from "./Icon"
import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

/*==================== Component ====================*/

const Paginator = ({
    justify = "left",
    textPage = "Page",
    textOf = "of",
    iconPrev,
    iconNext,
    handlePrev,
    handleNext,
    handleChange,
    active,
    totalPages,
    idInput = "paginator",
    ...props
}: Props) => {
    const activePage = active > totalPages ? totalPages : active < 1 ? 1 : active

    return (
        <Container $justify={justify}>
            {textPage} <StyledInput type="number" id={idInput} value={activePage} onChange={handleChange} {...props} />{" "}
            {`${textOf} ${totalPages}`}
            <Button onClick={handlePrev} disabled={activePage === 1 && true}>
                {iconPrev ? <Icon src={iconPrev} size={16} /> : <ChevronLeftIcon size={20} />}
            </Button>
            <Button onClick={handleNext} disabled={activePage === totalPages && true}>
                {iconNext ? <Icon src={iconNext} size={16} /> : <ChevronRightIcon size={20} />}
            </Button>
        </Container>
    )
}

export default Paginator

/*==================== Types ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

type JustifyTypes = keyof typeof justify

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $justify?: JustifyTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
    textPage?: string
    textOf?: string
    handlePrev: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    active: number
    totalPages: number
    idInput?: string
    iconPrev?: string
    iconNext?: string
}

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: $justify === "right" ? "flex-end" : "flex-start",
            $gap: "xs",
        })};
`

const StyledInput = styled(Input)`
    width: 48px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const buttonSize = 24

const Button = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:not(:disabled):active {
            background-color: ${Variables.Colors.Primary600};
        }
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`
