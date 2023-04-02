/*=============================================== BadgePage ===============================================*/

import { Page } from "../../components"
import { Badge, Flexbox } from "../../lib"

const BadgePage = () => {
    return (
        <Page title="Badge">
            <Flexbox gap="xs">
                <Badge color="primary" size={24} />
                <Badge color="secondary" size={24} />
                <Badge color="success" size={24} />
                <Badge color="danger" size={24} />
                <Badge color="warning" size={24} />
                <Badge color="gray" size={24} />
                <Badge color="black" size={24} />
                <Badge color="white" size={24} />
            </Flexbox>

            <Flexbox gap="xs">
                <Badge color="primary" size={48} content="star" />
                <Badge color="secondary" size={48} content="star" />
                <Badge color="success" size={48} content="star" />
                <Badge color="danger" size={48} content="star" />
                <Badge color="warning" size={48} content="star" />
                <Badge color="gray" size={48} content="star" />
                <Badge color="black" size={48} content="star" />
                <Badge color="white" size={48} content="star" />
            </Flexbox>

            <Flexbox gap="xs">
                <Badge content={300} color="primary" size={64} padding="l" />
                <Badge content={1} color="secondary" size={64} />
                <Badge content={1} color="success" size={64} />
                <Badge content={1} color="danger" size={64} />
                <Badge content={1} color="warning" size={64} />
                <Badge content={1} color="gray" size={64} />
                <Badge content={1} color="black" size={64} />
                <Badge content={1} color="white" size={64} />
            </Flexbox>
        </Page>
    )
}

export default BadgePage
