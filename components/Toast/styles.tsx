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
import type {
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
    display: ${({ $isClosed }) => ($isClosed ? "none" : "flex")};
    gap: ${Spacers.XXS};
    flex-direction: column;
    align-items: stretch;
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
            $alignItems: "flex-start",
            $justifyContent: "flex-start",
            $gap,
        })};

    ${Title} {
        flex-grow: 1;
    }
`

export const IconContainer = styled.span<{ $height: number }>`
    height: ${({ $height }) => $height}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
`

const Content = styled.div`
    ${Mixins.Flexbox({
        $gap: "xs",
        $flexDirection: "column",
        $alignItems: "stretch",
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
