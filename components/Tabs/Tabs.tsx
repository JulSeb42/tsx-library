/*=============================================== Tabs component ===============================================*/

import React, { forwardRef, useState } from "react"

import { Text, uuid } from "../../"

import * as Styles from "./styles"
import { TabsProps } from "./types"

const Tabs = forwardRef(
    (
        {
            as,
            items,
            contentColor,
            justify = "start",
            active = 0,
            accentColor = "primary",
            buttonColor = "font",
            variant = "basic",
            separatorColor = "gray-200",
            backgroundColor = "gray-50",
            gap = "xs",
            ...rest
        }: TabsProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        const [isActive, setIsActive] = useState(active)

        return (
            <Styles.StyledTabs ref={ref} as={as} $gap={gap} {...rest}>
                <Styles.ButtonsContainer
                    $variant={variant}
                    $justify={justify}
                    $col={items.length}
                    $separatorColor={separatorColor}
                    $backgroundColor={backgroundColor}
                >
                    {items.map((item, i) => (
                        <Styles.Button
                            $isActive={isActive === i}
                            onClick={() => setIsActive(i)}
                            $variant={variant}
                            $justify={justify}
                            $accentColor={accentColor}
                            $buttonColor={buttonColor}
                            key={uuid()}
                        >
                            {item.title}
                        </Styles.Button>
                    ))}
                </Styles.ButtonsContainer>

                {items.map((item, i) => (
                    <Styles.TabItem
                        as={typeof item.content === "string" ? Text : "div"}
                        color={
                            typeof item.content === "string"
                                ? contentColor
                                : "black"
                        }
                        $isActive={isActive === i}
                        key={uuid()}
                    >
                        {item.content}
                    </Styles.TabItem>
                ))}
            </Styles.StyledTabs>
        )
    }
)

export default Tabs
