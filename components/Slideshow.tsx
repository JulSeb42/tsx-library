/*=============================================== Slideshow ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"
import { stringifyPx } from "../utils"

import Variables from "../Variables"
import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Icon from "./Icon"
import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

import { ColorsHoverTypes } from "../common-types"

/*==================== Component ====================*/

const SlideshowButton = ({
    onClick,
    iconPrev,
    iconNext,
    prev,
    next,
    position,
    hideTouch,
    isLarge,
    color = "primary",
}: ButtonProps) => (
    <Button
        onClick={onClick}
        $position={position}
        $hideTouch={hideTouch}
        $isLarge={isLarge}
        $color={color}
    >
        {prev &&
            (iconPrev ? (
                <Icon src={iconPrev} size={24} />
            ) : (
                <ChevronLeftIcon size={24} />
            ))}

        {next &&
            (iconNext ? (
                <Icon src={iconNext} size={24} />
            ) : (
                <ChevronRightIcon size={24} />
            ))}
    </Button>
)

const Slideshow = ({ children, height, options, icons, ...props }: Props) => {
    // Slideshow with buttons
    const [active, setActive] = useState(0)
    const length = children.length

    const handleNext = () => {
        if (!options?.show) {
            setActive(active < length - 1 ? active + 1 : 0)
        } else {
            setActive(
                active < length + options.show ? active + options.show : 0
            )
        }
    }

    const handlePrev = () => {
        if (!options?.show) {
            setActive(active > 0 ? active - 1 : length - 1)
        } else {
            setActive(
                active > 0
                    ? active - options.show
                    : length + options.show + (options.show - 1)
            )
        }
    }

    // Automatic slideshow
    const autoSlideshow = useCallback(() => {
        setActive(active < length - 1 ? active + 1 : 0)
    }, [active, length])

    useEffect(() => {
        if (!options?.controls && !options?.pagination && !options?.autoplay) {
            setInterval(() => autoSlideshow(), 1500)
        } else if (options?.autoplay) {
            setInterval(() => autoSlideshow(), options.autoplay)
        }
    }, [
        options?.autoplay,
        autoSlideshow,
        options?.controls,
        options?.pagination,
    ])

    // Swipe
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e: any) => setTouchPosition(e.touches[0].clientX)

    const handleTouchMove = (e: any) => {
        if (touchPosition === null) {
            return
        }

        const diff = touchPosition - e.touches[0].clientX

        if (diff > 5) {
            handleNext()
        }

        if (diff < -5) {
            handlePrev()
        }

        setTouchPosition(null)
    }

    return (
        <StyledSlideshow {...props}>
            <Wrapper flexDirection="column" $height={height}>
                {(options?.controls || options?.controlsLarge) && (
                    <SlideshowButton
                        position="left"
                        onClick={handlePrev}
                        prev
                        hideTouch={options?.hideControlsTouch}
                        iconNext={icons?.next}
                        iconPrev={icons?.prev}
                        isLarge={options.controlsLarge}
                        color={options?.controlsColor}
                    />
                )}

                <ContentWrapper
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <Content
                        $show={options?.show}
                        $active={active}
                        $speed={options?.speed || 1000}
                    >
                        {children}
                    </Content>
                </ContentWrapper>

                {(options?.controls || options?.controlsLarge) && (
                    <SlideshowButton
                        position="right"
                        onClick={handleNext}
                        next
                        hideTouch={options?.hideControlsTouch}
                        iconNext={icons?.next}
                        iconPrev={icons?.prev}
                        isLarge={options.controlsLarge}
                        color={options?.controlsColor}
                    />
                )}
            </Wrapper>

            {options?.pagination && (
                <Pagination
                    $hideTouch={options?.hidePaginationTouch}
                    justifyContent="center"
                    alignItems="center"
                    gap={Variables.Spacers.XS}
                >
                    {children.map((_: any, i: any) => (
                        <Dot
                            onClick={() => setActive(i)}
                            $isActive={active === i && true}
                            $color={options?.paginationColor}
                            key={uuid()}
                        />
                    ))}
                </Pagination>
            )}
        </StyledSlideshow>
    )
}

export default Slideshow

/*==================== Types ====================*/

const positions = {
    left: "left",
    right: "right",
} as const

type PositionsTypes = keyof typeof positions

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    iconNext?: string
    prev?: boolean
    next?: boolean
    position: PositionsTypes
    hideTouch?: boolean
    isLarge?: boolean
    color?: ColorsHoverTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[]
    height?: string | number

    options?: {
        show?: number
        autoplay?: number
        controls?: boolean
        controlsLarge?: boolean
        controlsColor?: ColorsHoverTypes
        hideControlsTouch?: boolean
        hidePaginationTouch?: boolean
        speed?: number
        pagination?: boolean
        paginationColor?: ColorsHoverTypes
    }

    icons?: {
        prev?: string
        next?: string
    }
}

/*==================== Styles ====================*/

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
