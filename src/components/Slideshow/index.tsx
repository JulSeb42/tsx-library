// Packages
import React, { useState, useEffect, useCallback } from "react"
import { stringifyPx } from "ts-utils-julseb"

// Components
import Variables from "../Variables"
import Icon from "../Icon"
import ButtonIcon from "../ButtonIcon"
import Flexbox from "../Flexbox"

// Types
import { buttonProps, props } from "./types"

// Styles
import {
    Container,
    Wrapper,
    ContentWrapper,
    Content,
    ButtonsContainer,
    ButtonLarge,
    Dot,
} from "./styles"

const SlideshowButton: React.FC<buttonProps> = ({
    position,
    btnLarge,
    hideMobile,
    btnSize = 32,
    btnColor = "primary",
    onClick,
}) => {
    return (
        <ButtonsContainer
            align="center"
            position={position}
            btnLarge={btnLarge}
            hideMobile={hideMobile}
        >
            {btnLarge ? (
                <ButtonLarge position={position} onClick={onClick}>
                    <Icon
                        src={
                            position === "left"
                                ? "chevron-left"
                                : "chevron-right"
                        }
                        size={32}
                    />
                </ButtonLarge>
            ) : (
                <ButtonIcon
                    size={btnSize}
                    color={btnColor}
                    icon={
                        position === "left" ? "chevron-left" : "chevron-right"
                    }
                    onClick={onClick}
                />
            )}
        </ButtonsContainer>
    )
}

const Slideshow: React.FC<props> = ({
    children,
    show,
    auto,
    controls,
    controlsLarge,
    height,
    hideButtonsMobile,
    speed = 250,
    pagination,
    gapDots,
    dotSize = 8,
}) => {
    // Slideshow with buttons
    const [active, setActive] = useState(0)
    const length = children.length

    const handleNext = () => {
        if (!show) {
            setActive(active < length - 1 ? active + 1 : 0)
        } else {
            setActive(active < length + show ? active + show : 0)
        }
    }

    const handlePrev = () => {
        if (!show) {
            setActive(active > 0 ? active - 1 : length - 1)
        } else {
            setActive(active > 0 ? active - show : length + show + (show - 1))
        }
    }

    // Automatic slideshow
    const autoSlideshow = useCallback(() => {
        setActive(active < length - 1 ? active + 1 : 0)
    }, [active, length])

    useEffect(() => {
        if (auto) {
            setInterval(() => autoSlideshow(), auto)
        }
    }, [auto, autoSlideshow])

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
            <Wrapper direction="column" height={height}>
                {(controls || controlsLarge) && (
                    <SlideshowButton
                        position="left"
                        onClick={handlePrev}
                        btnLarge={controlsLarge}
                        hideMobile={hideButtonsMobile}
                    />
                )}

                <ContentWrapper
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <Content show={show} active={active} speed={speed}>
                        {children}
                    </Content>
                </ContentWrapper>

                {(controls || controlsLarge) && (
                    <SlideshowButton
                        position="right"
                        onClick={handleNext}
                        btnLarge={controlsLarge}
                        hideMobile={hideButtonsMobile}
                    />
                )}
            </Wrapper>

            {pagination && (
                <Flexbox justify="center" align="center" gap={gapDots ? stringifyPx(gapDots) : Variables.Spacers.XS}>
                    {children.map((_: any, i: any) => (
                        <Dot
                            onClick={() => setActive(i)}
                            dotSize={dotSize}
                            active={active === i && true}
                            key={i}
                        />
                    ))}
                </Flexbox>
            )}
        </Container>
    )
}

export default Slideshow
