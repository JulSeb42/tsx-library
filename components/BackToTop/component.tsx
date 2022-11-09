/*=============================================== Back to top ===============================================*/

import React, { useEffect, forwardRef, useState } from "react"

import ButtonIcon from "../ButtonIcon"
import ArrowUpIcon from "../../icons/ArrowUpIcon"

import * as Styles from "./styles"
import { BackToTopProps } from "./types"

const BackToTop = forwardRef(
    (
        {
            color = "primary",
            size = 32,
            shadow = "m",
            icon,
            variant,
            text,
            showText = "hover",
            textColor = "gray",
            position,
            ...props
        }: BackToTopProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)
        const [isTextVisible, setIsTextVisible] = useState(false)

        useEffect(() => {
            document.body.classList.add("smooth")
            document.documentElement.classList.add("smooth")

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
            window.scrollTo(0, 0)
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
                $isVisible={isVisible}
                $position={position?.position || "fixed"}
                $left={position?.left}
                $top={position?.top}
                $right={position?.right || "xxl"}
                $bottom={position?.bottom || "xxl"}
                $zIndex={position?.zIndex || 999}
            >
                {icon ? (
                    <ButtonIcon icon={icon} {...propsButton} {...props} />
                ) : (
                    <ButtonIcon
                        libicon={<ArrowUpIcon size={size * 0.7} {...props} />}
                        {...propsButton}
                    />
                )}

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
