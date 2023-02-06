/*=============================================== Rating styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, Breakpoints } from "../../"
import { ColorsHoverTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const buttonSize = 32

const Button = styled.button<{
    $color?: ColorsHoverTypes
    $isButton?: boolean
}>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ theme, $color }) =>
        theme.ColorsHoverDefault({ $color: $color })};

    ${({ $isButton, $color }) =>
        $isButton &&
        css`
            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme }) =>
                        theme.ColorsHoverHover({ $color: $color })};
                }

                &:active {
                    color: ${({ theme }) =>
                        theme.ColorsHoverActive({ $color: $color })};
                }
            }
        `}
`

setDefaultTheme([Button])

export { Button }
