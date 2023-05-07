/*=============================================== Dropdown component ===============================================*/

import React, { forwardRef, useRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { useClickOutside, Icon, uuid } from "../../"

import {
    StyledDropdownContainer,
    StyledDropdown,
    StyledDropdownItem,
} from "./styles"
import type {
    DropdownProps,
    DropdownItemProps,
    DropdownContainerProps,
} from "./types"

export const DropdownContainer = forwardRef(
    (
        {
            as,
            children,
            justifyContent = "flex-start",
            ...rest
        }: DropdownContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledDropdownContainer
            ref={ref}
            as={as}
            justifyContent={justifyContent}
            data-justify={justifyContent === "flex-end" ? "right" : "left"}
            {...rest}
        >
            {children}
        </StyledDropdownContainer>
    )
)

export const DropdownItem = forwardRef(
    (
        {
            as,
            to,
            href,
            blank,
            onClick,
            text,
            icon,
            ...rest
        }: DropdownItemProps,
        ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
    ) => {
        return (
            <StyledDropdownItem
                as={as ? as : to ? Link : href ? "a" : "button"}
                ref={ref}
                to={to}
                href={href}
                onClick={onClick}
                target={(href || to) && blank && "_blank"}
                rel={(href || to) && blank && "noreferrer noopener"}
                type="button"
                {...rest}
            >
                {icon &&
                    (typeof icon === "string" ? (
                        <Icon src={icon} size={16} className="icon" />
                    ) : (
                        icon
                    ))}

                {text}
            </StyledDropdownItem>
        )
    }
)

export const Dropdown = ({
    as,
    isOpen,
    setIsOpen,
    direction = "down",
    children,
    items,
    className,
    ...rest
}: DropdownProps) => {
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    return (
        <StyledDropdown
            ref={el}
            as={as}
            className={classNames({ open: isOpen }, className)}
            data-direction={direction}
            {...rest}
        >
            {items
                ? items?.map(item => {
                      const itemProps = {
                          text: item.text,
                          icon: item.icon,
                          className: "dropdown-item",
                      }

                      return (
                          <Fragment key={uuid()}>
                              {item.to ? (
                                  <DropdownItem
                                      to={item.to}
                                      blank={item.blank}
                                      {...itemProps}
                                  />
                              ) : item.href ? (
                                  <DropdownItem
                                      href={item.href}
                                      blank={item.blank}
                                      {...itemProps}
                                  />
                              ) : (
                                  item.onClick && (
                                      <DropdownItem
                                          onClick={item.onClick}
                                          {...itemProps}
                                      />
                                  )
                              )}
                          </Fragment>
                      )
                  })
                : children}
        </StyledDropdown>
    )
}
