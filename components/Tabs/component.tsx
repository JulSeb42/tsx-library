/*=============================================== Tabs ===============================================*/

import React, { useState } from "react"

import Text from "../Text"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { TabsProps } from "./types"

const Tabs = ({
    items,
    options = {
        active: 0,
        style: "basic",
        justify: "start",
    },
    ...props
}: TabsProps) => {
    const [isActive, setIsActive] = useState(options.active || 0)

    return (
        <Styles.StyledTabs {...props}>
            <Styles.ButtonsContainer
                $tabsStyle={options.style}
                $justify={options.justify}
                $col={items.length}
            >
                {items.map((item, i) => (
                    <Styles.Button
                        $isActive={isActive === i}
                        onClick={() => setIsActive(i)}
                        $tabsStyle={options.style}
                        $justify={options.justify}
                        key={uuid()}
                    >
                        {item.title}
                    </Styles.Button>
                ))}
            </Styles.ButtonsContainer>

            {items.map((item, i) => (
                <Styles.TabItem
                    as={typeof item.content === "string" ? Text : "div"}
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
