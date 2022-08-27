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
    $accordionStyle = "basic",
    $noBorder,
    customIcon,
}: ItemProps) => {
    const [open, setOpen] = useState(isOpen)

    return (
        <Styles.Item>
            <Styles.Button
                onClick={() => setOpen(!open)}
                $isOpen={open}
                $icon={icon}
                $accordionStyle={$accordionStyle}
                $noBorder={$noBorder}
                $hasIconCustom={customIcon ? true : false}
            >
                {title}

                <Styles.IconContainer>
                    {customIcon ? (
                        <Icon src={customIcon} size={20} />
                    ) : icon === "plus" ? (
                        <Styles.StyledIconPlus size={20} color="currentColor" />
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
                $accordionStyle={$accordionStyle}
            >
                {content}
            </Styles.Content>
        </Styles.Item>
    )
}

const Accordion = ({
    options = {
        style: "basic",
        icon: "plus",
    },
    items,
    ...props
}: AccordionProps) => (
    <Styles.StyledAccordion $accordionStyle={options.style} {...props}>
        {items.map((item, i) => (
            <AccordionItem
                icon={options.icon}
                isOpen={item.isOpen}
                title={item.title}
                content={item.content}
                $accordionStyle={options.style}
                customIcon={options.customIcon}
                $noBorder={
                    options.style === "rounded" &&
                    i === items.length - 1 &&
                    true
                }
                key={uuid()}
            />
        ))}
    </Styles.StyledAccordion>
)

export default Accordion
