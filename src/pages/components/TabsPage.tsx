/*=============================================== TabsPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import {
    Tabs,
    Text,
    TabButton,
    TabItem,
    TabsButtonsContainer,
    TabsContainer,
    uuid,
} from "../../lib"
import type { TabsItemProps } from "../../lib/types"

const TabsPage = () => {
    const [activeTab, setActiveTab] = useState(0)

    const items: TabsItemProps[] = [
        {
            title: "Tab 1",
            content: "Content tab 1",
        },
        {
            title: "Tab 2",
            content: (
                <div>
                    <Text>Hello</Text>
                    <Text>World</Text>
                </div>
            ),
        },
        {
            title: "Tab 3",
            content: "Content tab 3",
        },
    ]

    return (
        <Page title="Tabs">
            <Tabs
                items={items}
                variant="basic"
                justify="start"
                active={1}
                accentColor="secondary"
                gap="l"
                showInUrl
            />

            <Tabs items={items} variant="rounded" justify="stretch" />

            <TabsContainer>
                <TabsButtonsContainer>
                    {items.map((item, i) => (
                        <TabButton
                            isActive={i === activeTab}
                            onClick={() => setActiveTab(i)}
                            key={uuid()}
                        >
                            {item.title}
                        </TabButton>
                    ))}
                </TabsButtonsContainer>

                {items.map((item, i) => (
                    <TabItem isActive={activeTab === i} key={uuid()}>
                        {item.content}
                    </TabItem>
                ))}
            </TabsContainer>
        </Page>
    )
}

export default TabsPage
