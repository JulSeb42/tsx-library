// Packages
import React, { useState } from "react"

// Types
import { containerProps, itemProps } from "./types"

// Styles
import { AccordionContainer, Item, Button, Content } from "./style"

const Accordion: React.FC<containerProps> = props => {
    return (
        <AccordionContainer
            accordionStyle={props.accordionStyle || "basic"}
            {...props}
        >
            {props.children}
        </AccordionContainer>
    )
}

const AccordionItem: React.FC<itemProps> = props => {
    const [isOpen, setIsOpen] = useState(props.isOpen || false)

    return (
        <Item {...props}>
            <Button
                className="open-accordion"
                onClick={() => setIsOpen(!isOpen)}
                icon={props.icon}
            >
                <span>{props.title}</span>

                {props.icon === "plus" ? (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon ${isOpen ? "open" : ""}`}
                    >
                        <path
                            d="M12.6667 7.33333H8.66668V3.33333H7.33334V7.33333H3.33334V8.66666H7.33334V12.6667H8.66668V8.66666H12.6667V7.33333Z"
                            fill="currentColor"
                        />
                    </svg>
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon ${isOpen ? "open" : ""}`}
                    >
                        <path
                            d="M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </Button>

            <Content
                className={`content-accordion ${isOpen ? "open" : ""} ${
                    props.className
                }`}
            >
                {props.children}
            </Content>
        </Item>
    )
}

export { Accordion, AccordionItem }
