/*=============================================== Alert ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Text from "./Text"
import Mixins from "./Mixins"

import { ColorsShortTypes } from "./common-types"

/*==================== Component ====================*/

const Alert = ({ color = "primary", children, modal, ...props }: Props) => (
    <Container $color={color} as={typeof children === "string" ? Text : "div"} $modal={modal} {...props}>
        {children}
    </Container>
)

export default Alert

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    $color?: ColorsShortTypes
    $modal?: boolean
}

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: ColorsShortTypes
    children: string | React.ReactNode | React.ReactNode[]
    modal?: boolean
}

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    color: ${({ $color }) => ($color === "black" ? Variables.Colors.White : Variables.Colors.Black)};
    ${Mixins.Grid({
        $gap: "s",
    })};
    padding: ${Variables.Spacers.M};
    width: ${({ $modal }) => $modal && "100%"};
    max-width: ${({ $modal }) => $modal && "400px"};
    background-color: ${({ $color }) =>
        $color === "secondary"
            ? Variables.Colors.Secondary50
            : $color === "success"
            ? Variables.Colors.Success50
            : $color === "danger"
            ? Variables.Colors.Danger50
            : $color === "warning"
            ? Variables.Colors.Warning50
            : $color === "gray"
            ? Variables.Colors.Gray50
            : $color === "black"
            ? Variables.Colors.Gray800
            : $color === "white"
            ? Variables.Colors.Gray50
            : Variables.Colors.Primary50};
    border: 1px solid ${Mixins.ColorsShort};
    border-radius: ${Variables.Radiuses.M};
`
