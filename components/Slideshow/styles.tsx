/*=============================================== Slideshow styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Flexbox from "../Flexbox"

import { ColorsHoverTypes } from "../../utils/common-types"

import { PositionsTypes } from "./types"

const StyledSlideshow = styled.div`
    width: 100%;
    ${Mixins.Grid({
        $gap: "xs",
        $alignItems: "start",
    })};
`

const Wrapper = styled(Flexbox)<{ $height?: string | number }>`
    width: 100%;
    height: ${({ $height }) => ($height ? stringifyPx($height) : "60vh")};
    position: relative;
`

const ContentWrapper = styled(Flexbox)`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const Content = styled(Flexbox)<{
    $speed?: number
    $show?: number
    $active: number
}>`
    transition: all ${({ $speed }) => $speed}ms ease;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${({ $show }) => ($show ? `calc(100% / ${$show})` : "100%")};
    transform: ${({ $show, $active }) =>
        $show
            ? `translateX(-${$active * (100 / $show)}%)`
            : `translateX(-${$active * 100}%)`};
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        transition: ${Variables.Transitions.Long};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const buttonSize = 32
const buttonSizeLarge = 48

const Button = styled.button<{
    $position: PositionsTypes
    $hideTouch?: boolean
    $isLarge?: boolean
    $color?: ColorsHoverTypes
}>`
    width: ${({ $isLarge }) => ($isLarge ? buttonSizeLarge : buttonSize)}px;
    height: ${({ $isLarge }) => ($isLarge ? buttonSizeLarge : buttonSize)}px;
    border-radius: ${({ $isLarge, $position }) =>
        $isLarge && $position === "left"
            ? `0 ${Variables.Radiuses.M} ${Variables.Radiuses.M} 0`
            : $isLarge && $position === "right"
            ? `${Variables.Radiuses.M} 0 0 ${Variables.Radiuses.M}`
            : Variables.Radiuses.Circle};
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
            : $position === "left" && !$isLarge && Variables.Spacers.XS};
    right: ${({ $position, $isLarge }) =>
        $position === "right" && $isLarge
            ? 0
            : $position === "right" && !$isLarge && Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    color: ${({ $color }) =>
        $color === "white"
            ? Variables.Colors.Primary500
            : Variables.Colors.White};
    background-color: ${Mixins.ColorsHoverDefault};
    z-index: 2;

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Mixins.ColorsHoverHover};
        }
        &:active {
            background-color: ${Mixins.ColorsHoverActive};
        }
    }

    @media ${Variables.Breakpoints.Touch} {
        display: ${({ $hideTouch }) => $hideTouch && "none"};
    }
`

const Pagination = styled(Flexbox)<{ $hideTouch?: boolean }>`
    @media ${Variables.Breakpoints.Touch} {
        display: ${({ $hideTouch }) => $hideTouch && "none"};
    }
`

const dotSize = 8

const Dot = styled.button<{ $isActive?: boolean; $color?: ColorsHoverTypes }>`
    width: ${dotSize}px;
    height: ${dotSize}px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${({ $isActive, $color }) =>
        $isActive
            ? $color === "secondary"
                ? Variables.Colors.Secondary500
                : $color === "success"
                ? Variables.Colors.Success500
                : $color === "danger"
                ? Variables.Colors.Danger500
                : $color === "warning"
                ? Variables.Colors.Warning500
                : $color === "white"
                ? Variables.Colors.White
                : Variables.Colors.Primary500
            : !$isActive &&
              ($color === "secondary"
                  ? Variables.Colors.Secondary300
                  : $color === "success"
                  ? Variables.Colors.Success300
                  : $color === "danger"
                  ? Variables.Colors.Danger300
                  : $color === "warning"
                  ? Variables.Colors.Warning300
                  : $color === "white"
                  ? Variables.Colors.Gray300
                  : Variables.Colors.Primary300)};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $isActive, $color }) =>
                $isActive
                    ? $color === "secondary"
                        ? Variables.Colors.Secondary300
                        : $color === "success"
                        ? Variables.Colors.Success300
                        : $color === "danger"
                        ? Variables.Colors.Danger300
                        : $color === "warning"
                        ? Variables.Colors.Warning300
                        : $color === "white"
                        ? Variables.Colors.Gray300
                        : Variables.Colors.Primary300
                    : !$isActive &&
                      ($color === "secondary"
                          ? Variables.Colors.Secondary500
                          : $color === "success"
                          ? Variables.Colors.Success500
                          : $color === "danger"
                          ? Variables.Colors.Danger500
                          : $color === "warning"
                          ? Variables.Colors.Warning500
                          : $color === "white"
                          ? Variables.Colors.White
                          : Variables.Colors.Primary500)};
        }

        &:active {
            background-color: ${({ $color }) =>
                $color === "secondary"
                    ? Variables.Colors.Secondary600
                    : $color === "success"
                    ? Variables.Colors.Success600
                    : $color === "danger"
                    ? Variables.Colors.Danger600
                    : $color === "warning"
                    ? Variables.Colors.Warning600
                    : $color === "white"
                    ? Variables.Colors.Gray100
                    : Variables.Colors.Primary600};
        }
    }
`

export {
    StyledSlideshow,
    Wrapper,
    ContentWrapper,
    Content,
    Button,
    Pagination,
    Dot,
}
