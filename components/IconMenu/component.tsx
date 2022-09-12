/*=============================================== IconMenu ===============================================*/

import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useClickOutside } from "../../hooks"

import Burger from "../Burger"
import Icon from "../Icon/component"

import * as Styles from "./styles"
import { IconMenuProps } from "./types"

const IconMenu = ({
    items,
    icon,
    direction = "up",
    shadow,
    position,
    isOpen,
    setIsOpen,
    color = "primary",
    ...props
}: IconMenuProps) => {
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    return (
        <Styles.StyledIconMenu
            $position={position?.position || "relative"}
            $zIndex={position?.zIndex || 999}
            $left={position?.left}
            $top={position?.top}
            $right={position?.right}
            $bottom={position?.bottom}
            ref={el}
            {...props}
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

            {items.map(({ to, onClick, blank, ariaLabel, icon }, i) => {
                return (
                    <Styles.StyledButton
                        as={to ? Link : "button"}
                        to={to}
                        onClick={onClick}
                        target={blank ? "_blank" : ""}
                        rel={blank ? "noreferrer noopener" : ""}
                        aria-label={ariaLabel}
                        $color={color}
                        $index={i}
                        $isOpen={isOpen}
                        $direction={direction}
                        key={`button-${icon}-${ariaLabel}`}
                    >
                        <Icon src={icon} size={32} />
                    </Styles.StyledButton>
                )
            })}
        </Styles.StyledIconMenu>
    )
}

export default IconMenu
