/*=============================================== Accordion ===============================================*/

import React, { useState } from "react"

import Text from "../Text"
import { uuid } from "../../utils/utils"
import Icon from "../Icon"

import * as Styles from "./styles"
import { AccordionProps, ItemProps } from "./types"

const AccordionItem = ({
    isOpen = false,
    icon = "plus",
    title,
    content,
    $variant = "basic",
    $noBorder,
    customIcon,
    accentColor = "primary",
    separatorColor,
}: ItemProps) => {
    const [open, setOpen] = useState(isOpen)

    return (
        <Styles.Item>
            <Styles.Button
                onClick={() => setOpen(!open)}
                $isOpen={open}
                $icon={icon}
                $variant={$variant}
                $noBorder={$noBorder}
                $hasIconCustom={customIcon ? true : false}
                $accentColor={accentColor}
                $separatorColor={separatorColor}
            >
                {title}

                <Styles.IconContainer>
                    {customIcon ? (
                        <Icon src={customIcon} size={20} />
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
                $variant={$variant}
            >
                {content}
            </Styles.Content>
        </Styles.Item>
    )
}

const Accordion = ({
    variant = "basic",
    icon = "plus",
    accentColor = "primary",
    separatorColor,
    customIcon,
    items,
    ...props
}: AccordionProps) => (
    <Styles.StyledAccordion
        $variant={variant}
        $separatorColor={separatorColor}
        {...props}
    >
        {items.map((item, i) => (
            <AccordionItem
                icon={icon}
                isOpen={item.isOpen}
                title={item.title}
                content={item.content}
                $variant={variant}
                customIcon={customIcon}
                $noBorder={
                    variant === "rounded" && i === items.length - 1 && true
                }
                separatorColor={separatorColor}
                accentColor={accentColor}
                key={uuid()}
            />
        ))}
    </Styles.StyledAccordion>
)

export default Accordion
