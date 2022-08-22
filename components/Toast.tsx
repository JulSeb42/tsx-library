/*=============================================== Toast ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled from "styled-components"

import Variables from "../Variables"
import Text from "./Text"
import Mixins from "./Mixins"
import Icon from "./Icon"
import CloseIcon from "../icons/CloseIcon"

import { ColorsShortTypes, LibColorsTypes } from "../common-types"

/*==================== Component ====================*/

const Toast = ({ title, close, children, icon, ...props }: Props) => {
    const [isClosed, setIsClosed] = useState(false)

    return (
        <StyledToast $isClosed={isClosed} {...props}>
            {icon || close ? (
                <TitleContainer>
                    {icon && (
                        <Icon
                            src={icon.name}
                            size={24}
                            color={icon.color || "primary"}
                        />
                    )}

                    <Text tag="h5">{title}</Text>

                    {close && (
                        <CloseButton onClick={() => setIsClosed(true)}>
                            {typeof close === "object" ? (
                                <Icon src={close.icon} size={24} />
                            ) : (
                                <CloseIcon size={24} />
                            )}
                        </CloseButton>
                    )}
                </TitleContainer>
            ) : (
                <Text tag="h5">{title}</Text>
            )}

            {children && (
                <Content as={typeof children === "string" ? Text : "div"}>
                    {children}
                </Content>
            )}
        </StyledToast>
    )
}

export default Toast

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children?: string | React.ReactNode

    icon?: {
        name: string
        color?: LibColorsTypes | ColorsShortTypes | string
    }

    close?:
        | boolean
        | {
              icon: string
          }
}

/*==================== Styles ====================*/

const StyledToast = styled.div<{ $isClosed?: boolean }>`
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
