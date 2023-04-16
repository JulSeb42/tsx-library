/*=============================================== Accordion component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Text, uuid } from "../../"

import * as Styles from "./styles"
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
            <Styles.StyledAccordion
                ref={ref}
                as={as}
                className={classNames(variant, className)}
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
            <Styles.Item as={as} ref={ref} {...rest}>
                <Styles.Button
                    onClick={() => setOpen(!open)}
                    className={classNames(
                        variant,
                        { open: open },
                        { noBorder: noBorder }
                    )}
                >
                    {title}

                    <Styles.IconContainer
                        className={classNames({ open: open })}
                    >
                        <Styles.StyledIconPlus size={20} />
                    </Styles.IconContainer>
                </Styles.Button>

                <Styles.Content
                    as={typeof children === "string" ? Text : "div"}
                    className={classNames({ open: open }, variant)}
                >
                    {children}
                </Styles.Content>
            </Styles.Item>
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
