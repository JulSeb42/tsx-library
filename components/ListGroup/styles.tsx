/*=============================================== ListGroup styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    Spacers,
    Transitions,
    Breakpoints,
    FontWeights,
    Mixins,
    Text,
    stringifyPx,
} from "../../"
import { AllColorsTypes, ColorsHoverTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledListGroup = styled.div<{
    $borderColor?: AllColorsTypes
    $maxHeight?: number
}>`
    border: 1px solid
        ${({ theme, $borderColor }) =>
            theme.AllColors({ $color: $borderColor })};
    border-radius: ${Radiuses.M};
    overflow: hidden;
    ${Mixins.HideScrollbar};

    ${({ $maxHeight }) =>
        $maxHeight &&
        css`
            max-height: ${stringifyPx($maxHeight)};
            overflow-y: scroll;
        `}
`

const Item = styled.span<{
    $isHover?: boolean
    $borderColor?: AllColorsTypes
    $color?: ColorsHoverTypes
}>`
    display: block;
    width: 100%;
    padding: ${Spacers.XS};
    border: none;
    text-align: left;
    background-color: transparent;
    text-decoration: none;
    font-weight: ${FontWeights.Regular};

    &:not(:last-child) {
        border-bottom: 1px solid
            ${({ theme, $borderColor }) =>
                theme.AllColors({ $color: $borderColor })};
    }

    ${({ $isHover, theme, $color }) =>
        $isHover &&
        css`
            color: ${theme.ColorsHoverDefault({ $color: $color })};
            transition: ${Transitions.Short};

            @media ${Breakpoints.Hover} {
                &:hover {
                    background-color: ${theme.ColorsHoverHover({
                        $color: $color,
                    })};
                    color: ${$color === "white"
                        ? theme.Primary500
                        : theme.Background};
                }

                &:active {
                    background-color: ${theme.ColorsHoverActive({
                        $color: $color,
                    })};
                }
            }

            &:disabled {
                background-color: ${theme.Gray100};
                color: ${theme.Gray500};
            }
        `}
`

const Title = styled(Text).attrs({ tag: "h6" })`
    flex-grow: 1;
`

const NumberContainer = styled.span`
    height: 27px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
    font-weight: ${FontWeights.Black};
`

const badgeSize = 16

const Badge = styled.span<{
    $background?: AllColorsTypes
    $textColor?: AllColorsTypes
    $length: number
}>`
    min-width: ${badgeSize}px;
    height: ${badgeSize}px;
    background-color: ${({ theme, $background }) =>
        theme.AllColors({ $color: $background })};
    color: ${({ theme, $textColor }) =>
        theme.AllColors({ $color: $textColor })};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${Radiuses.Round};
    padding: 0 ${({ $length }) => $length > 2 && Spacers.XS};
    font-size: ${badgeSize * 0.7}px;
`

setDefaultTheme([StyledListGroup, Item, Title, NumberContainer, Badge])

export { StyledListGroup, Item, Title, NumberContainer, Badge }
