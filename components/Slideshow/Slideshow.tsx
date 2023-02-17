/*=============================================== Slideshow component ===============================================*/

import React, { forwardRef, useState, useEffect, useCallback } from "react"

import { Icon, uuid, Flexbox } from "../../"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"

import * as Styles from "./styles"
import { SlideshowProps, SlideshowButtonProps } from "./types"

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
}: SlideshowButtonProps) => (
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

const Slideshow = forwardRef(
    (
        {
            as,
            borderRadius,
            imgFit = "cover",
            controls,
            height,
            aspectRatio = "16/9",
            pagination,
            thumbnails,
            options,
            children,
            ...rest
        }: SlideshowProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        // Slideshow with buttons
        const [active, setActive] = useState(0)
        const length = children ? children.length : 0

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

        const handleTouchStart = (e: any) =>
            setTouchPosition(e.touches[0].clientX)

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

        const [controlsHidden, setControlsHidden] = useState(true)

        useEffect(() => {
            if (
                controls &&
                typeof controls === "object" &&
                controls.hideTouchScreens === false
            ) {
                setControlsHidden(false)
            } else {
                setControlsHidden(true)
            }
        }, [])

        return (
            <Styles.StyledSlideshow ref={ref} as={as} {...rest}>
                <Styles.Wrapper
                    $aspectRatio={aspectRatio}
                    flexDirection="column"
                    $height={height}
                >
                    {children && length > 1 && controls && (
                        <SlideshowButton
                            position="left"
                            onClick={handlePrev}
                            prev
                            hideTouch={controlsHidden}
                            iconNext={
                                typeof controls === "object" &&
                                controls.iconNext
                                    ? controls.iconNext
                                    : undefined
                            }
                            iconPrev={
                                typeof controls === "object" &&
                                controls.iconPrev
                                    ? controls.iconPrev
                                    : undefined
                            }
                            isLarge={
                                typeof controls === "object"
                                    ? controls.type === "large"
                                    : false
                            }
                            color={
                                typeof controls === "object" && controls.color
                                    ? controls.color
                                    : "primary"
                            }
                        />
                    )}

                    <Styles.ContentWrapper
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        $borderRadius={borderRadius}
                    >
                        <Styles.Content
                            $show={options?.show}
                            $active={active}
                            $speed={options?.speed || 1000}
                            $imgFit={imgFit}
                        >
                            {children}
                        </Styles.Content>
                    </Styles.ContentWrapper>

                    {children && length > 1 && controls && (
                        <SlideshowButton
                            position="right"
                            onClick={handleNext}
                            next
                            hideTouch={controlsHidden}
                            iconNext={
                                typeof controls === "object" &&
                                controls.iconNext
                                    ? controls.iconNext
                                    : undefined
                            }
                            iconPrev={
                                typeof controls === "object" &&
                                controls.iconNext
                                    ? controls.iconPrev
                                    : undefined
                            }
                            isLarge={
                                typeof controls === "object"
                                    ? controls.type === "large"
                                    : false
                            }
                            color={
                                typeof controls === "object" && controls.color
                                    ? controls.color
                                    : "primary"
                            }
                        />
                    )}
                </Styles.Wrapper>

                {thumbnails && (
                    <Flexbox
                        justifyContent="center"
                        alignItems="center"
                        gap="xs"
                    >
                        {thumbnails.map((image, i) => (
                            <Styles.Thumbnail
                                src={image}
                                alt={`Image ${i}`}
                                $isActive={active === i && true}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </Flexbox>
                )}

                {children && length > 1 && pagination && (
                    <Styles.Pagination
                        $hideTouch={
                            typeof pagination === "object" &&
                            pagination.hideTouchScreens
                        }
                        $position={
                            typeof pagination === "object" &&
                            pagination.position
                                ? pagination.position
                                : "outside"
                        }
                    >
                        {children.map((_: any, i: number) => (
                            <Styles.Dot
                                onClick={() => setActive(i)}
                                $isActive={active === i && true}
                                $color={
                                    typeof pagination === "object" &&
                                    pagination.color
                                        ? pagination.color
                                        : "primary"
                                }
                                $variant={
                                    typeof pagination === "object" &&
                                    pagination.variant
                                        ? pagination.variant
                                        : "dots"
                                }
                                key={uuid()}
                            />
                        ))}
                    </Styles.Pagination>
                )}
            </Styles.StyledSlideshow>
        )
    }
)

export default Slideshow
