/*=============================================== Dropdown component ===============================================*/

import React, { forwardRef, useRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { useClickOutside, Icon, uuid } from "../../"

import * as Styles from "./styles"
import type {
    DropdownProps,
    DropdownItemProps,
    DropdownContainerProps,
} from "./types"

export const DropdownContainer = forwardRef(
    (
        { as, children, justify = "left", ...rest }: DropdownContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.DropdownContainer
            ref={ref}
            as={as}
            $justify={justify}
            {...rest}
        >
            {children}
        </Styles.DropdownContainer>
    )
)

export const DropdownItem = forwardRef(
    (
        {
            as,
            color = "primary",
            to,
            href,
            blank,
            onClick,
            text,
            icon,
            padding = {
                topBottom: "xs",
                leftRight: "s",
            },
            gap = "xxs",
            ...rest
        }: DropdownItemProps,
        ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
    ) => {
        return (
            <Styles.DropdownItem
                as={as ? as : to ? Link : href ? "a" : "button"}
                ref={ref}
                to={to}
                href={href}
                onClick={onClick}
                target={(href || to) && blank && "_blank"}
                rel={(href || to) && blank && "noreferrer noopener"}
                $color={color}
                $padding={padding}
                $gap={gap}
                {...rest}
            >
                {icon &&
                    (typeof icon === "string" ? (
                        <Icon src={icon} size={16} />
                    ) : (
                        icon
                    ))}

                {text}
            </Styles.DropdownItem>
        )
    }
)

export const Dropdown = ({
    as,
    isOpen,
    setIsOpen,
    accentColor = "primary",
    direction = "down",
    children,
    items,
    maxHeightOpen = 40 * 3 + 24,
    ...rest
}: DropdownProps) => {
    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    return (
        <Styles.StyledDropdown
            ref={el}
            as={as}
            $isOpen={isOpen}
            $accentColor={accentColor}
            $direction={direction}
            $maxHeightOpen={maxHeightOpen}
            {...rest}
        >
            {items
                ? items?.map(item => {
                      const itemProps = {
                          color: accentColor,
                          text: item.text,
                          icon: item.icon,
                          padding: item.padding,
                          gap: item.gap,
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
        </Styles.StyledDropdown>
    )
}
