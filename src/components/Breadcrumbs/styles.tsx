// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"
import * as Font from "../Font"

import { styleProps } from "./types"

const Breadcrumbs = styled(Font.P)<styleProps>`
    a {
        ${Mixins.Flexbox({
            inline: true,
            alignItems: "center",
        })};

        &:after {
            ${({ icon }) =>
                icon
                    ? css`
                          ${Mixins.Icon({
                              icon: icon,
                              size: 14,
                              color: "current",
                          })}
                      `
                    : css`
                          content: "/";
                      `};
            color: ${Variables.Colors.Gray500};
            margin: 0 ${Variables.Spacers.XXS};
            margin-top: ${({ icon }) => icon && "2px"};
        }
    }
`

const Item = styled.span``

export { Breadcrumbs, Item }
