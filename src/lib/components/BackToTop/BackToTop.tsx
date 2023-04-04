/*=============================================== BackToTop component ===============================================*/

import React, { forwardRef, useState, useEffect } from "react"
import type { ForwardedRef } from "react"

import { ButtonIcon } from "../../"
import { ArrowUpIcon } from "../../icons"

import * as Styles from "./styles"
import type { BackToTopProps } from "./types"

const BackToTop = forwardRef(
    (
        {
            as,
            color = "primary",
            size = 32,
            shadow = "m",
            icon,
            variant,
            text = "Back to top",
            showText = "hover",
            textColor = "gray",
            position,
            ...rest
        }: BackToTopProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)
        const [isTextVisible, setIsTextVisible] = useState(false)

        useEffect(() => {
            if (window.scrollY >= 200) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }

            window.addEventListener("scroll", () => {
                if (window.scrollY >= 200) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            })
        }, [])

        const scrollToTop = () => {
            document.body.classList.add("smooth")
            document.documentElement.classList.add("smooth")

            setTimeout(() => window.scrollTo(0, 0), 100)

            setTimeout(() => {
                document.body.classList.remove("smooth")
                document.documentElement.classList.remove("smooth")
            }, 1000)
        }

        const propsButton = {
            shadow: shadow,
            size: size,
            color: color,
            variant: variant,
            onClick: scrollToTop,
            onMouseEnter: () => setIsTextVisible(true),
            onMouseLeave: () => setIsTextVisible(false),
            label: text || "Back to top",
        }

        return (
            <Styles.StyledBackToTop
                ref={ref}
                as={as}
                $isVisible={isVisible}
                $position={position?.position || "fixed"}
                $left={position?.left}
                $top={position?.top}
                $right={position?.right || "xxl"}
                $bottom={position?.bottom || "xxl"}
                $zIndex={position?.zIndex || 999}
                {...rest}
            >
                <ButtonIcon
                    icon={icon || <ArrowUpIcon size={size * 0.7} {...rest} />}
                    {...propsButton}
                />

                {text && (
                    <Styles.ButtonText
                        color={textColor}
                        $isVisible={
                            showText === "always" ? true : isTextVisible
                        }
                    >
                        {text}
                    </Styles.ButtonText>
                )}
            </Styles.StyledBackToTop>
        )
    }
)

export default BackToTop
