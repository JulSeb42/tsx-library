/*=============================================== Breadcrumbs ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import Mixins from "./Mixins"
import { P } from "./Font"
import ChevronRightIcon from "../icons/ChevronRightIcon"

import { ColorsHoverTypes } from "./common-types"
import { BreadcrumbsItemProps } from "./component-props"

/*==================== Component ====================*/

const Breadcrumbs = ({ items, separator = "slash", color = "primary", ...props }: Props) => (
    <Container $color={color} $separator={separator} {...props}>
        {items.map(({ text, to }) => (
            <React.Fragment key={uuid()}>
                <Item as={to ? Link : "span"} to={to ? to : undefined}>
                    {text}
                </Item>

                {to && (
                    <Separator $color={color} $separator={separator}>
                        {separator === "icon" ? <ChevronRightIcon size={20} /> : "/"}
                    </Separator>
                )}
            </React.Fragment>
        ))}
    </Container>
)

export default Breadcrumbs

/*==================== Types ====================*/

const separators = {
    slash: "slash",
    icon: "icon",
} as const

type SeparatorTypes = keyof typeof separators

interface StyleProps {
    $color?: ColorsHoverTypes
    $separator?: SeparatorTypes
}

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    separator?: SeparatorTypes
    items: BreadcrumbsItemProps[]
    color?: ColorsHoverTypes
}

/*==================== Styles ====================*/

const Container = styled(P)<StyleProps>`
    ${({ $separator }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "flex-start",
            $flexWrap: "wrap",
            $gap: $separator === "slash" ? "xs" : "xxs",
        })};

    ${({ $color }) =>
        $color &&
        css`
            color: ${$color === "white" ? Variables.Colors.White : Variables.Colors.Black};

            a {
                color: ${Mixins.ColorsHoverDefault};

                @media ${Variables.Breakpoints.Hover} {
                    &:hover {
                        color: ${Mixins.ColorsHoverHover};
                    }

                    &:active {
                        color: ${Mixins.ColorsHoverActive};
                    }
                }
            }
        `}
`

const Separator = styled.span<StyleProps>`
    color: ${({ $color }) => ($color === "white" ? Variables.Colors.White : Variables.Colors.Black)};
    position: relative;
    top: ${({ $separator }) => $separator === "icon" && "4px"};
`

const Item = styled.span`
    @media ${Variables.Breakpoints.Hover} {
        &:hover ${Separator}, &:active ${Separator} {
            color: ${Variables.Colors.Black};
        }
    }
`
