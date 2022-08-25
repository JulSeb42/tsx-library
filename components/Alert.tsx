/*=============================================== Alert ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { capitalize } from "ts-utils-julseb"

import Text from "./Text"
import Mixins from "./Mixins"
import Variables from "../Variables"

import { ColorsShortTypes } from "../common-types"

/*==================== Component ====================*/

const Alert = ({ color = "primary", children, isModal, ...props }: Props) => (
    <StyledAlert
        $color={color}
        as={typeof children === "string" ? Text : "div"}
        $isModal={isModal}
        {...props}
    >
        {children}
    </StyledAlert>
)

export default Alert

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: any
    children: string | React.ReactNode | React.ReactNode[]
    isModal?: boolean
}

/*==================== Styles ====================*/

const StyledAlert = styled.div<{
    $color: ColorsShortTypes
    $isModal?: boolean
}>`
    ${Mixins.Grid({
        $gap: "s",
    })};
    padding: ${Variables.Spacers.M};
    width: ${({ $isModal }) => $isModal && "100%"};
    max-width: ${({ $isModal }) => $isModal && "400px"};
    border-radius: ${Variables.Radiuses.M};
    color: ${({ $color }) =>
        $color === "black" ? Variables.Colors.White : Variables.Colors.Black};
    background-color: ${({ $color }) =>
        $color === "black"
            ? Variables.Colors.Gray900
            : $color === "white"
            ? Variables.Colors.Gray100
            : Variables.Colors[`${capitalize($color)}50`]};
    border: 1px solid ${Mixins.ColorsShort};
`
