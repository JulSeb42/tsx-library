/*=============================================== BackToTop component ===============================================*/

import React, { forwardRef, useState, useEffect } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { ButtonIcon } from "../../"
import { ArrowUpIcon } from "../../icons"

import { StyledBackToTop, ButtonText } from "./styles"
import type { BackToTopProps } from "./types"

const BackToTop = forwardRef(
    (
        {
            as,
            color = "primary",
            icon,
            variant,
            text = "Back to top",
            showText = "hover",
            className,
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

        return (
            <StyledBackToTop
                ref={ref}
                as={as}
                className={classNames({ visible: isVisible }, className)}
                {...rest}
            >
                <ButtonIcon
                    icon={icon || <ArrowUpIcon size={48 * 0.7} {...rest} />}
                    size={48}
                    color={color}
                    variant={variant}
                    onClick={scrollToTop}
                    onMouseEnter={() => setIsTextVisible(true)}
                    onMouseLeave={() => setIsTextVisible(false)}
                    label={text || "Back to top"}
                    className="button"
                />

                {text && (
                    <ButtonText
                        className={classNames(
                            {
                                visible:
                                    showText === "always" || showText === true
                                        ? true
                                        : showText === "hover" && isTextVisible,
                            },
                            "text"
                        )}
                    >
                        {text}
                    </ButtonText>
                )}
            </StyledBackToTop>
        )
    }
)

export default BackToTop
