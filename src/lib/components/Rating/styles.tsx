/*=============================================== Rating styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const BUTTON_SIZE = 32

const Button = styled.button`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.ColorsHoverDefault({ $color: "primary" })};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}

    &.is-button {
        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "primary" })};
            }

            &:active {
                color: ${({ theme }) =>
                    theme.ColorsHoverActive({ $color: "primary" })};
            }
        }
    }
`

setDefaultTheme([Button])

export { Button }
