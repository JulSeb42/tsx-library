/*=============================================== Rating styles ===============================================*/

import styled from "styled-components"

import { Breakpoints } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ColorsHoverTypes } from "../../utils/common-types"

const buttonSize = 32

const Button = styled.button<{ $color?: ColorsHoverTypes }>`
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

    @media ${Breakpoints.Hover} {
        &:hover {
            color: ${({ theme, $color }) =>
                theme.ColorsHoverHover({ $color: $color })};
        }

        &:active {
            color: ${({ theme, $color }) =>
                theme.ColorsHoverActive({ $color: $color })};
        }
    }
`

setDefaultTheme([Button])

export { Button }
