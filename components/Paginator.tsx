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
    idInput = "paginator",
    text,
    handles,
    pages,
    icons,
    ...props
}: Props) => {
    const activePage = pages.active > pages.total ? pages.total : pages.active < 1 ? 1 : pages.active

    return (
        <Container $justify={justify}>
            {text?.page || "Page"} <StyledInput type="number" id={idInput} value={activePage} onChange={handles.change} {...props} />{" "}
            {`${text?.of || "of"} ${pages.total}`}
            <Button onClick={handles.prev} disabled={activePage === 1 && true}>
                {icons?.prev ? <Icon src={icons.prev} size={16} /> : <ChevronLeftIcon size={20} />}
            </Button>
            <Button onClick={handles.next} disabled={activePage === pages.total && true}>
                {icons?.next ? <Icon src={icons.next} size={16} /> : <ChevronRightIcon size={20} />}
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
    idInput?: string

    text?: {
        page?: string
        of?: string
    }
    handles: {
        prev: (e: React.MouseEvent<HTMLButtonElement>) => void
        next: (e: React.MouseEvent<HTMLButtonElement>) => void
        change: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
    pages: {
        active: number
        total: number
    }
    icons?: {
        prev?: string
        next?: string
    }
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
