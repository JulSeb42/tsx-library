/*=============================================== IconMenu component ===============================================*/

import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { useClickOutside, Icon, Burger, stringifyPx } from "../../"

import {
    StyledIconMenu,
    StyledOpenButton,
    StyledButton,
    StyledIconPlus,
    ICON_MENU_BUTTON_SIZE,
} from "./styles"
import type { IconMenuProps } from "./types"

const IconMenu = ({
    as,
    items,
    direction = "right",
    color = "primary",
    icon = "burger",
    openIconSize,
    className,
    ...rest
}: IconMenuProps) => {
    const el = useRef<HTMLDivElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const [isOpen, setIsOpen] = useState(false)

    const defaultIconSize = ICON_MENU_BUTTON_SIZE * 0.7

    return (
        <StyledIconMenu ref={el} as={as} className={className} {...rest}>
            <StyledOpenButton
                onClick={() => setIsOpen(!isOpen)}
                className="icon-menu-button-open"
                $color={color}
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
                        className="icon-menu-button-open-icon"
                    />
                ) : icon === "plus" ? (
                    <StyledIconPlus
                        size={
                            typeof openIconSize === "number"
                                ? openIconSize
                                : defaultIconSize
                        }
                        color={color === "white" ? "primary" : "white"}
                        className={classNames(
                            { open: isOpen },
                            "icon-menu-button-open-icon"
                        )}
                    />
                ) : (
                    <Burger
                        isOpen={isOpen}
                        color={color === "white" ? "primary" : "white"}
                        as="span"
                        noHover
                        width={ICON_MENU_BUTTON_SIZE * 0.5}
                        height={ICON_MENU_BUTTON_SIZE * 0.4}
                        className="icon-menu-button-open-icon"
                    />
                )}
            </StyledOpenButton>

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
                    <StyledButton
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
                        style={{
                            ["--button-position-open" as any]: stringifyPx(
                                (i + 1) * (ICON_MENU_BUTTON_SIZE + 8)
                            ),
                        }}
                        data-direction={direction}
                        className={classNames(
                            { open: isOpen },
                            "icon-menu-button"
                        )}
                        $color={color}
                        key={`button-${icon}-${label}`}
                    >
                        <Icon src={icon} size={iconSize} />
                    </StyledButton>
                )
            )}
        </StyledIconMenu>
    )
}

export default IconMenu
