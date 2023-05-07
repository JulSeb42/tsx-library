/*=============================================== Accordion component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Text, uuid } from "../../"

import {
    StyledAccordion,
    StyledIconPlus,
    Item,
    Content,
    IconContainer,
    Button,
} from "./styles"
import type {
    AccordionProps,
    ItemProps,
    AccordionContainerProps,
} from "./types"

export const AccordionContainer = forwardRef(
    (
        { children, as, variant, className, ...rest }: AccordionContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledAccordion
                ref={ref}
                as={as}
                className={classNames(className, "accordion")}
                data-variant={variant}
                {...rest}
            >
                {children}
            </StyledAccordion>
        )
    }
)

export const AccordionItem = forwardRef(
    (
        {
            as,
            isOpen = false,
            title,
            children,
            variant = "basic",
            noBorder,
            ...rest
        }: ItemProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [open, setOpen] = useState(isOpen)

        return (
            <Item as={as} ref={ref} className="accordion-item" {...rest}>
                <Button
                    onClick={() => setOpen(!open)}
                    className={classNames(
                        { open: open },
                        { "no-border": noBorder },
                        "accordion-button"
                    )}
                    type="button"
                    data-variant={variant}
                >
                    {title}

                    <IconContainer
                        className={classNames(
                            { open: open },
                            "accordion-icon-container"
                        )}
                    >
                        <StyledIconPlus size={20} className="accordion-icon" />
                    </IconContainer>
                </Button>

                <Content
                    as={typeof children === "string" ? Text : "div"}
                    className={classNames({ open: open }, "accordion-content")}
                    data-variant={variant}
                >
                    {children}
                </Content>
            </Item>
        )
    }
)

export const Accordion = forwardRef(
    (
        { as, variant = "basic", items, children, ...rest }: AccordionProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <AccordionContainer ref={ref} as={as} variant={variant} {...rest}>
                {items
                    ? items.map((item, i) => (
                          <AccordionItem
                              isOpen={item.isOpen}
                              title={item.title}
                              variant={variant}
                              noBorder={
                                  variant === "rounded" &&
                                  i === items.length - 1 &&
                                  true
                              }
                              key={uuid()}
                          >
                              {item.content}
                          </AccordionItem>
                      ))
                    : children}
            </AccordionContainer>
        )
    }
)
