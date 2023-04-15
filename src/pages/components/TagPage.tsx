/*=============================================== TagPage ===============================================*/

import { Page } from "../../components"
import { Tag, Flexbox } from "../../lib"

const TagPage = () => {
    return (
        <Page title="Tag">
            <Flexbox gap="xs" alignItems="flex-start">
                <Tag
                    color="primary"
                    icons={{ left: "chevron-right", right: "close" }}
                >
                    Tag
                </Tag>
                <Tag color="secondary">Tag</Tag>
                <Tag color="success">Tag</Tag>
                <Tag color="danger">Tag</Tag>
                <Tag color="warning">Tag</Tag>
                <Tag color="gray">Tag</Tag>
                <Tag color="black">Tag</Tag>
                <Tag color="white">Tag</Tag>
                <Tag color="background">Tag</Tag>
                <Tag color="font">Tag</Tag>
            </Flexbox>

            <Flexbox gap="xs" alignItems="flex-start">
                <Tag color="primary" variant="outline">
                    Tag
                </Tag>
                <Tag color="secondary" variant="outline">
                    Tag
                </Tag>
                <Tag color="success" variant="outline">
                    Tag
                </Tag>
                <Tag color="danger" variant="outline">
                    Tag
                </Tag>
                <Tag color="warning" variant="outline">
                    Tag
                </Tag>
                <Tag color="gray" variant="outline">
                    Tag
                </Tag>
                <Tag color="black" variant="outline">
                    Tag
                </Tag>
                <Tag color="white" variant="outline">
                    Tag
                </Tag>
                <Tag color="background" variant="outline">
                    Tag
                </Tag>
                <Tag color="font" variant="outline">
                    Tag
                </Tag>
            </Flexbox>
        </Page>
    )
}

export default TagPage
