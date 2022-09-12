/*=============================================== Tabs ===============================================*/

import React, { useState } from "react"

import Text from "../Text"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { TabsProps } from "./types"

const Tabs = ({
    items,
    active = 0,
    variant = "basic",
    justify = "start",
    accentColor = "primary",
    separatorColor = "gray-200",
    backgroundColor = "gray-50",
    buttonColor = "font",
    contentColor,
    ...props
}: TabsProps) => {
    const [isActive, setIsActive] = useState(active)

    return (
        <Styles.StyledTabs {...props}>
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

export default Tabs
