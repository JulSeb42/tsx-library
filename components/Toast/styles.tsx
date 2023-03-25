/*=============================================== Toast styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Spacers,
    Mixins,
    Radiuses,
    Transitions,
    Breakpoints,
    stringifyPx,
    Text,
} from "../../"
import {
    PositionsTypes,
    ShadowsTypes,
    SpacersTypes,
    RadiusesTypes,
    AllColorsTypes,
    PaddingTypes,
} from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledToast = styled.div<{
    $isClosed?: boolean
    $maxWidth?: number
    $shadow?: ShadowsTypes
    $position?: PositionsTypes
    $left?: SpacersTypes | string
    $top?: SpacersTypes | string
    $right?: SpacersTypes | string
    $bottom?: SpacersTypes | string
    $zIndex?: number
    $borderRadius?: RadiusesTypes
    $borderWidth?: number
    $borderColor?: AllColorsTypes
    $padding?: PaddingTypes
}>`
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};
    background-color: ${({ theme }) => theme.Background};
    display: ${({ $isClosed }) => ($isClosed ? "none" : "grid")};
    gap: ${Spacers.XXS};
    ${({ $shadow }) =>
        Mixins.Shadow({
            $shadow: $shadow,
        })};
    ${Mixins.BorderRadius};
    ${Mixins.Padding};

    ${({ $position, $zIndex, $left, $top, $right, $bottom }) =>
        ($left || $top || $right || $bottom) &&
        Mixins.Position({
            $position,
            $zIndex,
            $left,
            $top,
            $right,
            $bottom,
        })};

    ${({ $borderWidth, $borderColor, theme }) =>
        ($borderColor || $borderWidth) &&
        css`
            border: ${$borderWidth || 1}px solid
                ${theme.AllColors({ $color: $borderColor || "gray-200" })};
        `}
`

export const Title = styled(Text)``

const TitleContainer = styled.div<{ $gap?: SpacersTypes }>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "flex-start",
            $gap,
        })};

    ${Title} {
        flex-grow: 1;
    }
`

const Content = styled.div`
    ${Mixins.Grid({
        $gap: "xs",
    })};
`

const buttonSize = 32

const CloseButton = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    background-color: transparent;
    transition: ${Transitions.Short};
    color: ${({ theme }) => theme.Primary500};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme }) => theme.Gray50};
        }
    }
`

setDefaultTheme([StyledToast, TitleContainer, Content, CloseButton])

export { StyledToast, TitleContainer, Content, CloseButton }
