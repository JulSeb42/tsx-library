/*=============================================== Breadcrumbs ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import Mixins from "./Mixins"
import Text from "./Text"
import ChevronRightIcon from "../icons/ChevronRightIcon"

import { ColorsHoverTypes, LibColorsTypes, ColorsShortTypes } from "./common-types"
import { BreadcrumbsItemProps } from "./component-props"

/*==================== Component ====================*/

const Breadcrumbs = ({ items, options, ...props }: Props) => (
    <StyledBreacrumbs
        color={options?.color}
        linkColor={options?.linkColor || "primary"}
        $separator={options?.separator || "slash"}
        {...props}
    >
        {items.map(({ text, to }) => (
            <React.Fragment key={uuid()}>
                <Item as={to ? Link : "span"} to={to ? to : undefined}>
                    {text}
                </Item>

                {to && (
                    <Separator $separator={options?.separator || "slash"}>
                        {options?.separator === "icon" ? <ChevronRightIcon size={20} /> : "/"}
                    </Separator>
                )}
            </React.Fragment>
        ))}
    </StyledBreacrumbs>
)

export default Breadcrumbs

/*==================== Types ====================*/

const separators = {
    slash: "slash",
    icon: "icon",
} as const

type SeparatorTypes = keyof typeof separators

interface StyleProps {
    $separator?: SeparatorTypes
    $linkColor?:
        | ColorsHoverTypes
        | {
              default?: LibColorsTypes | ColorsShortTypes | string
              hover?: LibColorsTypes | ColorsShortTypes | string
              active?: LibColorsTypes | ColorsShortTypes | string
          }
}

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    items: BreadcrumbsItemProps[]

    options?: {
        separator?: SeparatorTypes
        color?: LibColorsTypes | ColorsShortTypes | string
        linkColor?:
            | ColorsHoverTypes
            | {
                  default: string
                  hover: string
                  active: string
              }
    }
}

/*==================== Styles ====================*/

const StyledBreacrumbs = styled(Text)<StyleProps>`
    ${({ $separator }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "flex-start",
            $flexWrap: "wrap",
            $gap: $separator === "slash" ? "xs" : "xxs",
        })};
`

const Separator = styled.span<StyleProps>`
    color: currentColor;
    position: relative;
    top: ${({ $separator }) => $separator === "icon" && "4px"};
`

const Item = styled.span``
