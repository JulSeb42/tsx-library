/*=============================================== Accordion component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"

import { Icon, Text, uuid } from "../../"

import * as Styles from "./styles"
import type {
    AccordionProps,
    ItemProps,
    AccordionContainerProps,
} from "./types"

export const AccordionContainer = forwardRef(
    (
        {
            children,
            as,
            variant,
            separatorColor,
            ...rest
        }: AccordionContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledAccordion
                ref={ref}
                as={as}
                $variant={variant}
                $separatorColor={separatorColor}
                {...rest}
            >
                {children}
            </Styles.StyledAccordion>
        )
    }
)

export const AccordionItem = forwardRef(
    (
        {
            as,
            isOpen = false,
            icon = "plus",
            title,
            children,
            variant = "basic",
            noBorder,
            customIcon,
            accentColor = "primary",
            separatorColor,
            ...rest
        }: ItemProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [open, setOpen] = useState(isOpen)

        return (
            <Styles.Item as={as} ref={ref} {...rest}>
                <Styles.Button
                    onClick={() => setOpen(!open)}
                    $variant={variant}
                    $noBorder={noBorder}
                    $accentColor={accentColor}
                    $separatorColor={separatorColor}
                >
                    {title}

                    <Styles.IconContainer
                        $isOpen={open}
                        $icon={icon}
                        $hasIconCustom={!!customIcon}
                    >
                        {customIcon ? (
                            typeof customIcon === "string" ? (
                                <Icon src={customIcon} size={20} />
                            ) : (
                                customIcon
                            )
                        ) : icon === "plus" ? (
                            <Styles.StyledIconPlus size={20} />
                        ) : (
                            icon === "chevron" && (
                                <Styles.StyledIconChevron size={20} />
                            )
                        )}
                    </Styles.IconContainer>
                </Styles.Button>

                <Styles.Content
                    as={typeof children === "string" ? Text : "div"}
                    $isOpen={open}
                    $variant={variant}
                >
                    {children}
                </Styles.Content>
            </Styles.Item>
        )
    }
)

export const Accordion = forwardRef(
    (
        {
            as,
            variant = "basic",
            icon = "plus",
            accentColor = "primary",
            separatorColor,
            customIcon,
            items,
            children,
            ...rest
        }: AccordionProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <AccordionContainer
                ref={ref}
                as={as}
                variant={variant}
                separatorColor={separatorColor}
                {...rest}
            >
                {items
                    ? items.map((item, i) =>
                          customIcon ? (
                              <AccordionItem
                                  isOpen={item.isOpen}
                                  title={item.title}
                                  variant={variant}
                                  customIcon={customIcon}
                                  noBorder={
                                      variant === "rounded" &&
                                      i === items.length - 1 &&
                                      true
                                  }
                                  separatorColor={separatorColor}
                                  accentColor={accentColor}
                                  key={uuid()}
                              >
                                  {item.content}
                              </AccordionItem>
                          ) : (
                              <AccordionItem
                                  icon={icon}
                                  isOpen={item.isOpen}
                                  title={item.title}
                                  variant={variant}
                                  noBorder={
                                      variant === "rounded" &&
                                      i === items.length - 1 &&
                                      true
                                  }
                                  separatorColor={separatorColor}
                                  accentColor={accentColor}
                                  key={uuid()}
                              >
                                  {item.content}
                              </AccordionItem>
                          )
                      )
                    : children}
            </AccordionContainer>
        )
    }
)
