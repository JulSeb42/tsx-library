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
                    variant="outline"
                >
                    Tag
                </Tag>
                <Tag color="secondary" variant="outline">
                    Tag
                </Tag>
                <Tag color="success">Tag</Tag>
                <Tag color="danger">Tag</Tag>
                <Tag color="warning">Tag</Tag>
                <Tag color="gray">Tag</Tag>
                <Tag color="black">Tag</Tag>
                <Tag color="white">Tag</Tag>
            </Flexbox>

            <Flexbox gap="xs" alignItems="flex-start">
                <Tag
                    color="primary"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                    variant="outline"
                >
                    Tag
                </Tag>
                <Tag
                    color="secondary"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
                <Tag
                    color="success"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
                <Tag
                    color="danger"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
                <Tag
                    color="warning"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
                <Tag
                    color="gray"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
                <Tag
                    color="black"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
                <Tag
                    color="white"
                    borderRadius="round"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                >
                    Tag
                </Tag>
            </Flexbox>
        </Page>
    )
}

export default TagPage
