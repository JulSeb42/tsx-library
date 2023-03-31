/*=============================================== Accordion component ===============================================*/

import { forwardRef, useState } from "react"
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
            isOpen = false,
            icon = "plus",
            title,
            content,
            variant = "basic",
            noBorder,
            customIcon,
            accentColor = "primary",
            separatorColor,
        }: ItemProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [open, setOpen] = useState(isOpen)

        return (
            <Styles.Item ref={ref}>
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
                    as={typeof content === "string" ? Text : "div"}
                    $isOpen={open}
                    $variant={variant}
                >
                    {content}
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
                    ? items.map((item, i) => (
                          <AccordionItem
                              icon={icon}
                              isOpen={item.isOpen}
                              title={item.title}
                              content={item.content}
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
                          />
                      ))
                    : children}
            </AccordionContainer>
        )
    }
)
