/*=============================================== Slideshow ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

/*==================== Component ====================*/

const SlideshowButton = ({ onClick, iconPrev, iconNext, prev, next, position }: ButtonProps) => (
    <Button onClick={onClick} $position={position}>
        {prev && (iconPrev ? <Icon src={iconPrev} size={24} /> : <ChevronLeftIcon size={24} />)}

        {next && (iconNext ? <Icon src={iconNext} size={24} /> : <ChevronRightIcon size={24} />)}
    </Button>
)

const Slideshow = ({
    children,
    options,
    icons,
    height = "30vw",
    ...props
}: Props) => {
    const [active, setActive] = useState(0)
    const length = children.length

    const handlePrev = () => setActive(active > 0 ? active - 1 : length - 1)
    const handleNext = () => setActive(active < length - 1 ? active + 1 : 0)

    const autoSlideshow = useCallback(() => {
        setActive(active < length - 1 ? active + 1 : 0)
    }, [active, length])

    useEffect(() => {
        if (!options?.controls && !options?.pagination && !options?.autoplay) {
            setInterval(() => autoSlideshow(), 1000)
        } else if (options?.autoplay) {
            setInterval(() => autoSlideshow(), options.autoplay)
        }
    }, [options?.autoplay, autoSlideshow, options?.controls, options?.pagination])

    return (
        <Container {...props}>
            {options?.controls && <SlideshowButton onClick={handlePrev} prev iconPrev={icons?.prev} position="left" />}

            <Slides $height={height}>
                <Slide $active={active} $show={options?.show} $speed={options?.speed || 1000}>
                    {children}
                </Slide>
            </Slides>

            {options?.controls && <SlideshowButton onClick={handleNext} next iconNext={icons?.next} position="right" />}

            {options?.pagination && (
                <Pagination>
                    {children.map((_, i) => (
                        <PaginationItem
                            onClick={() => setActive(i)}
                            $active={active === i ? true : false}
                            key={uuid()}
                        />
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

interface SlidesStyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $height?: number | string
}

interface SlideStyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $active: number
    $show?: number
    $speed?: number
}

interface PaginationStyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $active: boolean
}

interface ButtonStyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $position: PositionsTypes
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    iconNext?: string
    prev?: boolean
    next?: boolean
    position: "left" | "right"
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[]
    height?: number | string

    options?: {
        controls?: boolean
        pagination?: boolean
        autoplay?: number
        show?: number
        speed?: number
    }

    icons?: {
        prev?: string
        next?: string
    }
}

/*==================== Styles ====================*/

const Container = styled.div`
    ${Mixins.Grid({
        $gap: "xs",
        $alignItems: "start",
    })};
    width: 100%;
    position: relative;
`

const Slides = styled.div<SlidesStyleProps>`
    ${Mixins.Flexbox({
        $flexDirection: "column",
    })};
    width: 100%;
    height: ${({ $height }) => stringifyPx($height)};
    position: relative;
    overflow: hidden;
    z-index: 1;
`

const Slide = styled.div<SlideStyleProps>`
    transition: all ${({ $speed }) => $speed}ms ease;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${({ $show }) => ($show ? `calc(100% / ${$show})` : "100%")};
    transform: ${({ $show, $active }) =>
        $show ? `translateX(-${$active * (100 / $show)}%)` : `translateX(-${$active * 100}%)`};
    height: 100%;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }

    img {
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
`

const Pagination = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};
`

const paginationItemSize = 8

const PaginationItem = styled.span<PaginationStyleProps>`
    width: ${paginationItemSize}px;
    height: ${paginationItemSize}px;
    background-color: ${({ $active }) => ($active ? Variables.Colors.Primary500 : Variables.Colors.Primary300)};
    border-radius: ${Variables.Radiuses.Circle};
    cursor: pointer;
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $active }) => ($active ? Variables.Colors.Primary300 : Variables.Colors.Primary500)};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }
`
