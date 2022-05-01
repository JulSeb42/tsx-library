// Packages
import React, { useState, useEffect, useCallback } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"
import Icon from "./Icon"
import Flexbox, { props as flexboxProps} from "./Flexbox"
import Grid from "./Grid"
import ButtonIcon from "./ButtonIcon"

// Types
interface styleWrapperProps extends flexboxProps {
    height?: string | number
}

interface styleContentProps extends flexboxProps {
    speed?: number
    show?: number
    active: number
}

interface styleButtonsContainerProps extends flexboxProps {
    btnLarge?: boolean
    position?: string
    hideMobile?: boolean
}

interface styleButtonLargeProps extends React.HTMLAttributes<HTMLButtonElement> {
    position?: string
}

interface styleDotProps extends React.HTMLAttributes<HTMLButtonElement> {
    dotSize?: number
    active?: boolean
}

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    position?: string
    btnLarge?: boolean
    hideMobile?: boolean
    btnSize?: number
    btnColor?: string
}

interface props extends React.HTMLAttributes<HTMLElement> {
    children: any
    show?: number
    auto?: number
    controls?: boolean
    controlsLarge?: boolean
    height?: string | number
    hideButtonsMobile?: boolean
    speed?: number
    pagination?: boolean
    gapDots?: number | string
    dotSize?: number
}

// Styles
const Container = styled(Grid)`
    width: 100%;
    gap: ${Variables.Spacers.XS};
    align-items: start;
`

const Wrapper = styled(Flexbox)<styleWrapperProps>`
    width: 100%;
    height: ${props => props.height};
    position: relative;
`

const ContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const Content = styled(Flexbox)<styleContentProps>`
    transition: all ${props => `${props.speed}ms`} ease;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${props => (props.show ? `calc(100% / ${props.show})` : "100%")};
    transform: ${props =>
        props.show
            ? `translateX(-${props.active * (100 / props.show)}%)`
            : `translateX(-${props.active * 100}%)`};
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }
`

const ButtonsContainer = styled(Flexbox)<styleButtonsContainerProps>`
    position: absolute;
    z-index: 2;
    padding: 0 ${props => (props.btnLarge ? 0 : Variables.Spacers.XS)};
    height: 100%;
    left: ${props => (props.position === "left" ? 0 : "auto")};
    right: ${props => (props.position === "right" ? 0 : "auto")};

    ${props =>
        props.hideMobile &&
        css`
            @media (hover: none) and (pointer: coarse) {
                display: none;
            }
        `}
`

const ButtonLarge = styled.button<styleButtonLargeProps>`
    --size: 48px;
    width: var(--size);
    height: var(--size);
    background-color: ${Variables.Overlays.Plain.White50};
    transition: ${Variables.Transitions.Short};
    border: none;
    color: ${Variables.Colors.Primary500};
    border-radius: ${props =>
        props.position === "left"
            ? `0 ${Variables.Radiuses.M} ${Variables.Radiuses.M} 0`
            : `${Variables.Radiuses.M} 0 0 ${Variables.Radiuses.M}`};

    &:hover {
        background-color: ${Variables.Overlays.Plain.White80};
    }
`

const PaginationContainer = styled(Flexbox)`
    width: 100%;
`

const Dot = styled.button<styleDotProps>`
    width: ${props => `${props.dotSize}px`};
    height: ${props => `${props.dotSize}px`};
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${props =>
        props.active
            ? Variables.Colors.Primary500
            : Variables.Colors.Primary300};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${props =>
            props.active
                ? Variables.Colors.Primary300
                : Variables.Colors.Primary500};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
    }
`

const SlideshowButton: React.FC<buttonProps> = props => {
    return (
        <ButtonsContainer
            align="center"
            position={props.position}
            btnLarge={props.btnLarge}
            hideMobile={props.hideMobile}
        >
            {props.btnLarge ? (
                <ButtonLarge position={props.position} onClick={props.onClick}>
                    <Icon
                        name={
                            props.position === "left"
                                ? "chevron-left"
                                : "chevron-right"
                        }
                        size={32}
                    />
                </ButtonLarge>
            ) : (
                <ButtonIcon
                    size={props.btnSize || 32}
                    color={props.btnColor || "primary"}
                    icon={
                        props.position === "left"
                            ? "chevron-left"
                            : "chevron-right"
                    }
                    onClick={props.onClick}
                />
            )}
        </ButtonsContainer>
    )
}

const Slideshow: React.FC<props> = props => {
    // Slideshow with buttons
    const [active, setActive] = useState(0)
    const length = props.children.length

    const handleNext = () => {
        if (!props.show) {
            setActive(active < length - 1 ? active + 1 : 0)
        } else {
            setActive(active < length + props.show ? active + props.show : 0)
        }
    }

    const handlePrev = () => {
        if (!props.show) {
            setActive(active > 0 ? active - 1 : length - 1)
        } else {
            setActive(
                active > 0
                    ? active - props.show
                    : length + props.show + (props.show - 1)
            )
        }
    }

    // Automatic slideshow
    const autoSlideshow = useCallback(() => {
        setActive(active < length - 1 ? active + 1 : 0)
    }, [active, length])

    useEffect(() => {
        if (props.auto) {
            setInterval(() => autoSlideshow(), props.auto)
        }
    }, [props.auto, autoSlideshow])

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
        <Container>
            <Wrapper direction="column" height={props.height || "60vh"}>
                {(props.controls || props.controlsLarge) && (
                    <SlideshowButton
                        position="left"
                        onClick={handlePrev}
                        btnLarge={props.controlsLarge}
                        hideMobile={props.hideButtonsMobile}
                    />
                )}

                <ContentWrapper
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <Content
                        show={props.show}
                        active={active}
                        speed={props.speed || 250}
                    >
                        {props.children}
                    </Content>
                </ContentWrapper>

                {(props.controls || props.controlsLarge) && (
                    <SlideshowButton
                        position="right"
                        onClick={handleNext}
                        btnLarge={props.controlsLarge}
                        hideMobile={props.hideButtonsMobile}
                    />
                )}
            </Wrapper>

            {props.pagination && (
                <PaginationContainer
                    justify="center"
                    align="center"
                    gap={props.gapDots || Variables.Spacers.XS}
                >
                    {props.children.map((_: any, i: any) => (
                        <Dot
                            onClick={() => setActive(i)}
                            dotSize={props.dotSize || 8}
                            active={active === i && true}
                            key={i}
                        />
                    ))}
                </PaginationContainer>
            )}
        </Container>
    )
}

export default Slideshow
