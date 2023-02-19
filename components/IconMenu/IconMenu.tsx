/*=============================================== IconMenu component ===============================================*/

import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { useClickOutside, Icon, Burger } from "../../"

import * as Styles from "./styles"
import { IconMenuProps } from "./types"

const IconMenu = ({
    as,
    items,
    icon = "burger",
    direction = "up",
    shadow,
    position = {
        position: "relative",
    },
    color = "primary",
    ...rest
}: IconMenuProps) => {
    const el = useRef<HTMLDivElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Styles.StyledIconMenu
            ref={el}
            as={as}
            $position={position}
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
            >
                {icon && typeof icon === "object" ? (
                    <Icon
                        src={isOpen ? icon.open : icon.close}
                        size={32}
                        color={color === "white" ? "primary" : "white"}
                    />
                ) : icon === "plus" ? (
                    <Styles.StyledIconPlus
                        size={32}
                        color={color === "white" ? "primary" : "white"}
                        $isOpen={isOpen}
                    />
                ) : (
                    <Burger
                        isOpen={isOpen}
                        width={48 * 0.5}
                        height={48 * 0.4}
                        color={color === "white" ? "primary" : "white"}
                        as="span"
                        noHover
                    />
                )}
            </Styles.StyledOpenButton>

            {items.map(({ to, onClick, blank, label, icon, href }, i) => {
                return (
                    <Styles.StyledButton
                        as={to ? Link : href ? "a" : "button"}
                        to={to}
                        onClick={onClick}
                        href={href}
                        target={(to || href) && blank ? "_blank" : undefined}
                        rel={
                            (to || href) && blank
                                ? "noreferrer noopener"
                                : undefined
                        }
                        aria-label={label}
                        $color={color}
                        $index={i}
                        $isOpen={isOpen}
                        $direction={direction}
                        key={`button-${icon}-${label}`}
                    >
                        <Icon src={icon} size={32} />
                    </Styles.StyledButton>
                )
            })}
        </Styles.StyledIconMenu>
    )
}

export default IconMenu
