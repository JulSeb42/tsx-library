/*=============================================== Slideshow styles ===============================================*/

import styled, { css } from "styled-components"

import {
    stringifyPx,
    Transitions,
    Radiuses,
    Breakpoints,
    Spacers,
    Mixins,
    Flexbox,
    Image,
} from "../../"
import type {
    ColorsHoverTypes,
    RadiusesTypes,
    ObjectFitTypes,
} from "../../types"
import type { ButtonPositionsTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledSlideshow = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        $gap: "xs",
        $flexDirection: "column",
        $alignItems: "center",
        $justifyItems: "center",
    })};
    position: relative;
`

const Wrapper = styled(Flexbox)<{
    $height?: string | number
    $aspectRatio?: string
}>`
    width: 100%;
    height: ${({ $height }) => $height && stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio, $height }) => !$height && $aspectRatio};
    position: relative;
    overflow: hidden;
`

const ContentWrapper = styled(Flexbox)<{ $borderRadius?: RadiusesTypes }>`
    overflow: hidden;
    width: 100%;
    height: 100%;
    ${Mixins.BorderRadius};
`

const Content = styled(Flexbox)<{
    $speed?: number
    $show?: number
    $active: number
    $imgFit?: ObjectFitTypes
}>`
    transition: all ${({ $speed }) => $speed}ms ease;
    ${Mixins.HideScrollbar};
    width: ${({ $show }) => ($show ? `calc(100% / ${$show})` : "100%")};
    transform: ${({ $show, $active }) =>
        $show
            ? `translateX(-${$active * (100 / $show)}%)`
            : `translateX(-${$active * 100}%)`};
    height: 100%;

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        transition: ${Transitions.Long};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: ${({ $imgFit }) => $imgFit};
    }
`

const buttonSize = 32
const buttonSizeLarge = 48

const Button = styled.button<{
    $position: ButtonPositionsTypes
    $hideTouch?: boolean
    $isLarge?: boolean
    $color?: ColorsHoverTypes
}>`
    width: ${({ $isLarge }) => ($isLarge ? buttonSizeLarge : buttonSize)}px;
    height: ${({ $isLarge }) => ($isLarge ? buttonSizeLarge : buttonSize)}px;
    border-radius: ${({ $isLarge, $position }) =>
        $isLarge && $position === "left"
            ? `0 ${Radiuses.M} ${Radiuses.M} 0`
            : $isLarge && $position === "right"
            ? `${Radiuses.M} 0 0 ${Radiuses.M}`
            : Radiuses.Circle};
    padding: 0;
    border: none;
    position: absolute;
    top: calc(
        50% - ${({ $isLarge }) => ($isLarge ? buttonSizeLarge : buttonSize)}px /
            2
    );
    left: ${({ $position, $isLarge }) =>
        $position === "left" && $isLarge
            ? 0
            : $position === "left" && !$isLarge && Spacers.XS};
    right: ${({ $position, $isLarge }) =>
        $position === "right" && $isLarge
            ? 0
            : $position === "right" && !$isLarge && Spacers.XS};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    color: ${({ $color, theme }) =>
        $color === "white" ? theme.Primary500 : theme.Background};
    background-color: ${({ theme }) => theme.ColorsHoverDefault};
    z-index: 2;

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme }) => theme.ColorsHoverHover};
        }
        &:active {
            background-color: ${({ theme }) => theme.ColorsHoverActive};
        }
    }

    @media ${Breakpoints.Touch} {
        display: ${({ $hideTouch }) => $hideTouch && "none"};
    }
`

const Pagination = styled(Flexbox).attrs({
    justifyContent: "center",
    alignItems: "center",
    gap: "xs",
})<{
    $hideTouch?: boolean
    $position?: "inside" | "outside"
}>`
    width: 100%;
    max-width: 70%;

    @media ${Breakpoints.Touch} {
        display: ${({ $hideTouch }) => $hideTouch && "none"};
    }

    ${({ $position }) =>
        $position === "inside" &&
        css`
            position: absolute;
            bottom: 8px;
        `}
`

const dotSize = 8

const Dot = styled.button<{
    $isActive?: boolean
    $color?: ColorsHoverTypes
    $variant?: "dots" | "dots-outline" | "bars"
}>`
    padding: 0;
    border: none;
    transition: ${Transitions.Short};

    ${({ $variant, $isActive, theme, $color }) =>
        $variant === "dots-outline"
            ? css`
                  width: ${dotSize}px;
                  height: ${dotSize}px;
                  border-radius: 50%;
                  background-color: ${$isActive
                      ? theme.ColorsHoverDefault({ $color: $color })
                      : "transparent"};
                  border: 1px solid
                      ${theme.ColorsHoverDefault({ $color: $color })};

                  @media ${Breakpoints.Hover} {
                      &:hover {
                          border-color: ${theme.ColorsHoverHover({
                              $color: $color,
                          })};
                          background-color: ${$isActive &&
                          theme.ColorsHoverHover({ $color: $color })};
                      }

                      &:active {
                          border-color: ${theme.ColorsHoverActive({
                              $color: $color,
                          })};
                          background-color: ${$isActive &&
                          theme.ColorsHoverActive({ $color: $color })};
                      }
                  }
              `
            : $variant === "bars"
            ? css`
                  background-color: ${$isActive
                      ? theme.ColorsHoverDefault({ $color: $color })
                      : theme.ColorsHoverHover({ $color: $color })};
                  flex-grow: 1;
                  height: 4px;
                  border-radius: ${Radiuses.Round};

                  @media ${Breakpoints.Hover} {
                      &:hover {
                          background-color: ${$isActive
                              ? theme.ColorsHoverHover({ $color: $color })
                              : theme.ColorsHoverDefault({
                                    $color: $color,
                                })};
                      }

                      &:active {
                          background-color: ${theme.ColorsHoverActive({
                              $color: $color,
                          })};
                      }
                  }
              `
            : css`
                  width: ${dotSize}px;
                  height: ${dotSize}px;
                  border-radius: 50%;
                  background-color: ${$isActive
                      ? theme.ColorsHoverDefault({ $color: $color })
                      : theme.ColorsHoverHover({ $color: $color })};

                  @media ${Breakpoints.Hover} {
                      &:hover {
                          background-color: ${$isActive
                              ? theme.ColorsHoverHover({ $color: $color })
                              : theme.ColorsHoverDefault({
                                    $color: $color,
                                })};
                      }

                      &:active {
                          background-color: ${theme.ColorsHoverActive({
                              $color: $color,
                          })};
                      }
                  }
              `}
`

const Thumbnail = styled(Image).attrs({ fit: "cover", width: 48, height: 48 })<{
    $isActive: boolean
}>`
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
    transition: ${Transitions.Short};
    cursor: pointer;

    @media ${Breakpoints.Hover} {
        &:hover {
            opacity: 0.8;
        }
    }
`

setDefaultTheme([
    StyledSlideshow,
    Wrapper,
    ContentWrapper,
    Content,
    Button,
    Pagination,
    Dot,
    Thumbnail,
])

export {
    StyledSlideshow,
    Wrapper,
    ContentWrapper,
    Content,
    Button,
    Pagination,
    Dot,
    Thumbnail,
}
