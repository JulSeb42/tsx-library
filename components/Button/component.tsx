/*=============================================== Button ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import Loader from "../Loader"

import * as Styles from "./styles"
import { ButtonProps } from "./types"

const Button = forwardRef(
    (
        {
            disabled,
            children,
            to,
            type = "button",
            isLoading,
            icons,
            variant = "plain",
            noPadding,
            color = "primary",
            libicon,
            shadow,
            loaderVariant = 1,
            ...props
        }: ButtonProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => {
        const loaderFunction = () => (
            <Loader size={16} borderSize={2} color="gray" variant={loaderVariant} speed={loaderVariant === 3 ? 1200 : 1000} />
        )

        return (
            <Styles.StyledButton
                disabled={!!isLoading || disabled}
                $variant={variant}
                $color={color}
                $noPadding={noPadding}
                as={to ? Link : "button"}
                to={to ? to : undefined}
                type={to ? undefined : type}
                ref={ref}
                $shadow={typeof shadow === "object" ? shadow.default : shadow}
                $shadowHover={
                    typeof shadow === "object" ? shadow.hover : shadow
                }
                $shadowActive={
                    typeof shadow === "object" ? shadow.active : shadow
                }
                {...props}
            >
                {icons?.only ? (
                    isLoading ? (
                        loaderFunction()
                    ) : typeof icons.only === "string" ? (
                        <Icon src={icons.only} size={16} />
                    ) : (
                        icons.only
                    )
                ) : libicon?.only ? (
                    libicon.only
                ) : (
                    <>
                        {isLoading && loaderFunction()}

                        {!isLoading && libicon?.left && libicon.left}

                        {!isLoading &&
                            icons?.left &&
                            (typeof icons.left === "string" ? (
                                <Icon src={icons.left} size={16} />
                            ) : (
                                icons.left
                            ))}

                        {children}

                        {icons?.right &&
                            (typeof icons.right === "string" ? (
                                <Icon src={icons.right} size={16} />
                            ) : (
                                icons.right
                            ))}

                        {libicon?.right && libicon.right}
                    </>
                )}
            </Styles.StyledButton>
        )
    }
)

export default Button
