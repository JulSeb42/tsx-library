/*=============================================== Slideshow ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Icon from "./Icon"
import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

/*==================== Component ====================*/

const SlideshowButton = ({ onClick, iconPrev, iconNext, prev, next, position, hideTouch }: ButtonProps) => (
    <Button onClick={onClick} $position={position} $hideTouch={hideTouch}>
        {prev && (iconPrev ? <Icon src={iconPrev} size={24} /> : <ChevronLeftIcon size={24} />)}

        {next && (iconNext ? <Icon src={iconNext} size={24} /> : <ChevronRightIcon size={24} />)}
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
            setActive(active < length + options.show ? active + options.show : 0)
        }
    }

    const handlePrev = () => {
        if (!options?.show) {
            setActive(active > 0 ? active - 1 : length - 1)
        } else {
            setActive(active > 0 ? active - options.show : length + options.show + (options.show - 1))
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
    }, [options?.autoplay, autoSlideshow, options?.controls, options?.pagination])

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
        <Container {...props}>
            <Wrapper flexDirection="column" $height={height}>
                {options?.controls && (
                    <SlideshowButton
                        position="left"
                        onClick={handlePrev}
                        prev
                        hideTouch={options?.hideControlsTouch}
                        iconNext={icons?.next}
                        iconPrev={icons?.prev}
                    />
                )}

                <ContentWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <Content $show={options?.show} $active={active} $speed={options?.speed || 1000}>
                        {children}
                    </Content>
                </ContentWrapper>

                {options?.controls && (
                    <SlideshowButton
                        position="right"
                        onClick={handleNext}
                        next
                        hideTouch={options?.hideControlsTouch}
                        iconNext={icons?.next}
                        iconPrev={icons?.prev}
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
                        <Dot onClick={() => setActive(i)} $active={active === i && true} key={uuid()} />
                    ))}
                </Pagination>
            )}
        </Container>
    )
}

export default Slideshow

/*==================== Types ====================*/

const positions = {
    left: "left",
    right: "right",
} as const

type PositionsTypes = keyof typeof positions

interface StyleWrapperProps {
    $height?: string | number
}

interface StyleContentProps {
    $speed?: number
    $show?: number
    $active: number
}

interface StyleDotProps extends React.HTMLAttributes<HTMLButtonElement> {
    $active?: boolean
}

interface ButtonStyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $position: PositionsTypes
    $hideTouch?: boolean
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    iconNext?: string
    prev?: boolean
    next?: boolean
    position: PositionsTypes
    hideTouch?: boolean
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[]
    height?: string | number

    options?: {
        show?: number
        autoplay?: number
        controls?: boolean
        hideControlsTouch?: boolean
        hidePaginationTouch?: boolean
        speed?: number
        pagination?: boolean
    }

    icons?: {
        prev?: string
        next?: string
    }
}

/*==================== Styles ====================*/

const Container = styled.div`
    width: 100%;
    ${Mixins.Grid({
        $gap: "xs",
        $alignItems: "start",
    })};
`

const Wrapper = styled(Flexbox)<StyleWrapperProps>`
    width: 100%;
    height: ${({ $height }) => ($height ? stringifyPx($height) : "60vh")};
    position: relative;
`

const ContentWrapper = styled(Flexbox)`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const Content = styled(Flexbox)<StyleContentProps>`
    transition: all ${({ $speed }) => $speed}ms ease;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${({ $show }) => ($show ? `calc(100% / ${$show})` : "100%")};
    transform: ${({ $show, $active }) =>
        $show ? `translateX(-${$active * (100 / $show)}%)` : `translateX(-${$active * 100}%)`};
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

const Button = styled.button<ButtonStyleProps>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    border: none;
    position: absolute;
    top: calc(50% - ${buttonSize}px / 2);
    left: ${({ $position }) => $position === "left" && Variables.Spacers.XS};
    right: ${({ $position }) => $position === "right" && Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.Primary500};
    z-index: 2;

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Primary300};
        }
        &:active {
            background-color: ${Variables.Colors.Primary600};
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

const Dot = styled.button<StyleDotProps>`
    width: ${dotSize}px;
    height: ${dotSize}px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${({ $active }) => ($active ? Variables.Colors.Primary500 : Variables.Colors.Primary300)};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${({ $active }) => ($active ? Variables.Colors.Primary300 : Variables.Colors.Primary500)};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
    }
`
