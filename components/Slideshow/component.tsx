/*=============================================== Slideshow ===============================================*/

import React, { useEffect, useState, useCallback } from "react"

import Variables from "../../Variables"
import Icon from "../Icon"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { SlideshowProps, ButtonProps } from "./types"

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
    <Styles.Button
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
    </Styles.Button>
)

const Slideshow = ({
    children,
    height,
    options,
    pagination,
    controls,
    ...props
}: SlideshowProps) => {
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
        if (!controls && !pagination && !options?.autoplay) {
            setInterval(() => autoSlideshow(), 1500)
        } else if (options?.autoplay) {
            setInterval(() => autoSlideshow(), options.autoplay)
        }
    }, [options?.autoplay, autoSlideshow, controls, pagination])

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
        <Styles.StyledSlideshow {...props}>
            <Styles.Wrapper flexDirection="column" $height={height}>
                {controls && (
                    <SlideshowButton
                        position="left"
                        onClick={handlePrev}
                        prev
                        hideTouch={controls.hideTouchScreens}
                        iconNext={controls.iconNext}
                        iconPrev={controls.iconPrev}
                        isLarge={controls.type === "large"}
                        color={controls.color}
                    />
                )}

                <Styles.ContentWrapper
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <Styles.Content
                        $show={options?.show}
                        $active={active}
                        $speed={options?.speed || 1000}
                    >
                        {children}
                    </Styles.Content>
                </Styles.ContentWrapper>

                {controls && (
                    <SlideshowButton
                        position="right"
                        onClick={handleNext}
                        next
                        hideTouch={controls.hideTouchScreens}
                        iconNext={controls.iconNext}
                        iconPrev={controls.iconPrev}
                        isLarge={controls.type === "large"}
                        color={controls.color}
                    />
                )}
            </Styles.Wrapper>

            {pagination && (
                <Styles.Pagination
                    $hideTouch={
                        typeof pagination === "object" &&
                        pagination.hideTouchScreens
                    }
                    justifyContent="center"
                    alignItems="center"
                    gap={Variables.Spacers.XS}
                >
                    {children.map((_: any, i: any) => (
                        <Styles.Dot
                            onClick={() => setActive(i)}
                            $isActive={active === i && true}
                            $color={
                                typeof pagination === "object"
                                    ? pagination.color
                                    : "primary"
                            }
                            key={uuid()}
                        />
                    ))}
                </Styles.Pagination>
            )}
        </Styles.StyledSlideshow>
    )
}

export default Slideshow
