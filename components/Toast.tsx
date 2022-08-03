/*=============================================== Toast ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled from "styled-components"

import Variables from "./Variables"
import { H5, P } from "./Font"
import Mixins from "./Mixins"
import Icon from "./Icon"
import CloseIcon from "../icons/CloseIcon"

import { ColorsShortTypes, LibColorsTypes } from "./common-types"

/*==================== Component ====================*/

const Toast = ({ title, close, children, icon, iconClose, iconColor = "primary", ...props }: Props) => {
    const [isClosed, setIsClosed] = useState(false)

    return (
        <Container $isClosed={isClosed} {...props}>
            {icon || close || iconClose ? (
                <TitleContainer>
                    {icon && <Icon src={icon} size={24} color={iconColor} />}

                    <H5>{title}</H5>

                    {(close || iconClose) && (
                        <CloseButton onClick={() => setIsClosed(true)}>
                            {iconClose ? <Icon src={iconClose} size={24} /> : <CloseIcon size={24} />}
                        </CloseButton>
                    )}
                </TitleContainer>
            ) : (
                <H5>{title}</H5>
            )}

            {children && <Content as={typeof children === "string" ? P : "div"}>{children}</Content>}
        </Container>
    )
}

export default Toast

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isClosed?: boolean
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    iconColor?: LibColorsTypes | ColorsShortTypes | string
    close?: boolean
    children?: string | React.ReactNode
    icon?: string
    iconClose?: string
}

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    width: 100%;
    max-width: 400px;
    background-color: ${Variables.Colors.White};
    display: ${({ $isClosed }) => ($isClosed ? "none" : "grid")};
    gap: ${Variables.Spacers.XXS};
    box-shadow: ${Variables.Shadows.M};
    padding: ${Variables.Spacers.M};
    border-radius: ${Variables.Radiuses.M};
`

const TitleContainer = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
    })};

    h5 {
        flex-grow: 1;
    }
`

const Content = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })}
`

const buttonSize = 32

const CloseButton = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    background-color: transparent;
    transition: ${Variables.Transitions.Short};
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Gray50};
        }
    }
`
