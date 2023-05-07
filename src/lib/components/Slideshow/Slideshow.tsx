/*=============================================== Slideshow component ===============================================*/

import React, { forwardRef, useState, useEffect, useCallback } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Icon, uuid, Flexbox, stringifyPx } from "../../"
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons"

import {
    StyledSlideshow,
    Wrapper,
    ContentWrapper,
    Content,
    Button,
    Pagination,
    Dot,
    Thumbnail,
} from "./styles"
import type { SlideshowProps, SlideshowButtonProps } from "./types"

const SlideshowButton = ({
    onClick,
    iconPrev,
    iconNext,
    isPrev,
    isNext,
    position,
    hideTouch,
    isLarge,
    color = "primary",
    className,
}: SlideshowButtonProps) => {
    return (
        <Button
            onClick={onClick}
            data-size={isLarge ? "large" : "small"}
            data-position={position}
            type="button"
            className={classNames({ "hide-on-touch": hideTouch }, className)}
            $color={color}
        >
            {isPrev &&
                (iconPrev ? (
                    <Icon src={iconPrev} size={24} />
                ) : (
                    <ChevronLeftIcon size={24} />
                ))}

            {isNext &&
                (iconNext ? (
                    <Icon src={iconNext} size={24} />
                ) : (
                    <ChevronRightIcon size={24} />
                ))}
        </Button>
    )
}

const Slideshow = forwardRef(
    (
        {
            as,
            controls,
            height,
            pagination,
            thumbnails,
            options,
            children,
            activeSlide = 0,
            ...rest
        }: SlideshowProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        // Slideshow with buttons
        const [active, setActive] = useState(activeSlide)
        const length = children ? children.length : 0

        const handleNext = () => {
            setActive(active < length - 1 ? active + 1 : 0)
            console.log("Clicked next")
        }

        const handlePrev = () => setActive(active > 0 ? active - 1 : length - 1)

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
        }, [controls])

        return (
            <StyledSlideshow ref={ref} as={as} {...rest}>
                <Wrapper
                    flexDirection="column"
                    style={{
                        ["--slideshow-height" as any]:
                            height && stringifyPx(height),
                    }}
                    className="slideshow-wrapper"
                >
                    {children && length > 1 && controls && (
                        <SlideshowButton
                            position="left"
                            onClick={handlePrev}
                            isPrev
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
                            className="slideshow-button slideshow-button-prev"
                        />
                    )}

                    <ContentWrapper
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        className="slideshow-content-wrapper"
                    >
                        <Content
                            style={{
                                ["--slideshow-speed" as any]: options?.speed
                                    ? `${options?.speed}ms`
                                    : null,
                                ["--translate" as any]: `-${active * 100}%`,
                            }}
                            className="slideshow-content"
                        >
                            {children}
                        </Content>
                    </ContentWrapper>

                    {children && length > 1 && controls && (
                        <SlideshowButton
                            position="right"
                            onClick={handleNext}
                            isNext
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
                            className="slideshow-button slideshow-button-next"
                        />
                    )}
                </Wrapper>

                {thumbnails && (
                    <Flexbox
                        justifyContent="center"
                        alignItems="center"
                        gap="xs"
                        className="slideshow-thumbnails"
                    >
                        {thumbnails.map((image, i) => (
                            <Thumbnail
                                src={image}
                                alt={`Image ${i}`}
                                onClick={() => setActive(i)}
                                className={classNames(
                                    { active: active === i },
                                    "slideshow-thumbnail"
                                )}
                                key={uuid()}
                            />
                        ))}
                    </Flexbox>
                )}

                {children && length > 1 && pagination && (
                    <Pagination
                        data-position={
                            typeof pagination === "object"
                                ? pagination?.position
                                : "outside"
                        }
                        className={classNames(
                            {
                                "hide-on-touch":
                                    typeof pagination === "object"
                                        ? pagination?.hideTouchScreens
                                        : false,
                            },
                            "slideshow-pagination"
                        )}
                    >
                        {children.map((_: any, i: number) => (
                            <Dot
                                onClick={() => setActive(i)}
                                data-variant={
                                    typeof pagination === "object"
                                        ? pagination.variant
                                        : "dots"
                                }
                                className={classNames(
                                    { active: active === i },
                                    "slideshow-pagination-item"
                                )}
                                $color={
                                    typeof pagination === "object" &&
                                    pagination.color
                                        ? pagination.color
                                        : "primary"
                                }
                                key={uuid()}
                            />
                        ))}
                    </Pagination>
                )}
            </StyledSlideshow>
        )
    }
)

export default Slideshow
