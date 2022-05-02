// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import * as Font from "../Font"
import Variables from "../Variables"
import IconMixin from "../IconMixin"

// Types
import { styleProps, styleItemProps } from "./types"

// Styles
const Breadcrumbs = styled(Font.P)<styleProps>`
    a:after {
        content: "/";
        margin: 0 ${Variables.Spacers.XXS};
        color: ${Variables.Colors.Gray500};
    }

    ${props =>
        props.icon &&
        css`
            a {
                display: inline-flex;
                align-items: center;

                &:after {
                    ${IconMixin({
                        icon: props.icon,
                        size: 14,
                        color: Variables.Colors.Gray500,
                    })};
                    margin-top: 2px;
                }
            }
        `}
`

const Item = styled.span<styleItemProps>``

export { Breadcrumbs, Item }
