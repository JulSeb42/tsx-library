/*=============================================== IconMenu component ===============================================*/

import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { useClickOutside, Icon, Burger, variableSpacer } from "../../"

import * as Styles from "./styles"
import type { IconMenuProps } from "./types"

const IconMenu = ({
    as,
    items,
    direction = "up",
    shadow,
    position = {
        position: "relative",
    },
    color = "primary",
    buttonsSize = 48,
    icon = "burger",
    openIconSize = buttonsSize * 0.7,
    gap = "xs",
    ...rest
}: IconMenuProps) => {
    const el = useRef<HTMLDivElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const [isOpen, setIsOpen] = useState(false)

    const defaultIconSize = buttonsSize * 0.7

    return (
        <Styles.StyledIconMenu
            ref={el}
            as={as}
            $position={position}
            $buttonSize={buttonsSize}
            {...rest}
        >
            <Styles.StyledOpenButton
                onClick={() => setIsOpen(!isOpen)}
                $color={color}
                $shadowDefault={
                    typeof shadow === "object" ? shadow.default : shadow
                }
                $shadowHover={
                    typeof shadow === "object" ? shadow.hover : shadow
                }
                $shadowActive={
                    typeof shadow === "object" ? shadow.active : shadow
                }
                $buttonSize={buttonsSize}
            >
                {icon && typeof icon === "object" ? (
                    <Icon
                        src={isOpen ? icon.open : icon.close}
                        size={
                            typeof openIconSize === "object"
                                ? isOpen
                                    ? openIconSize?.open
                                    : openIconSize?.close
                                : defaultIconSize
                        }
                        color={color === "white" ? "primary" : "white"}
                    />
                ) : icon === "plus" ? (
                    <Styles.StyledIconPlus
                        size={
                            typeof openIconSize === "number"
                                ? openIconSize
                                : defaultIconSize
                        }
                        color={color === "white" ? "primary" : "white"}
                        $isOpen={isOpen}
                    />
                ) : (
                    <Burger
                        isOpen={isOpen}
                        color={color === "white" ? "primary" : "white"}
                        as="span"
                        noHover
                        width={
                            typeof openIconSize === "object"
                                ? openIconSize?.width
                                : buttonsSize * 0.5
                        }
                        height={
                            typeof openIconSize === "object"
                                ? openIconSize?.height
                                : buttonsSize * 0.4
                        }
                    />
                )}
            </Styles.StyledOpenButton>

            {items.map(
                (
                    {
                        onClick,
                        blank,
                        label,
                        icon,
                        href,
                        to,
                        iconSize = defaultIconSize,
                    },
                    i
                ) => (
                    <Styles.StyledButton
                        as={to ? Link : href ? "a" : "button"}
                        onClick={onClick}
                        href={href}
                        to={to}
                        target={(href || to) && blank ? "_blank" : undefined}
                        rel={
                            (href || to) && blank
                                ? "noreferrer noopener"
                                : undefined
                        }
                        aria-label={label}
                        $color={color}
                        $index={i}
                        $isOpen={isOpen}
                        $direction={direction}
                        $buttonSize={buttonsSize}
                        $gap={gap}
                        style={{
                            ["--icon-menu-position-open" as any]:
                                variableSpacer(gap),
                        }}
                        key={`button-${icon}-${label}`}
                    >
                        <Icon src={icon} size={iconSize} />
                    </Styles.StyledButton>
                )
            )}
        </Styles.StyledIconMenu>
    )
}

export default IconMenu
