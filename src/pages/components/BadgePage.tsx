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
                <Badge color="primary" size={48} icon="star" />
                <Badge color="secondary" size={48} icon="star" />
                <Badge color="success" size={48} icon="star" />
                <Badge color="danger" size={48} icon="star" />
                <Badge color="warning" size={48} icon="star" />
                <Badge color="gray" size={48} icon="star" />
                <Badge color="black" size={48} icon="star" />
                <Badge color="white" size={48} icon="star" />
            </Flexbox>

            <Flexbox gap="xs">
                <Badge number={300} color="primary" />
                <Badge number={1} color="secondary" />
                <Badge number={1} color="success" />
                <Badge number={1} color="danger" />
                <Badge number={1} color="warning" />
                <Badge number={1} color="gray" />
                <Badge number={1} color="black" />
                <Badge number={1} color="white" />
            </Flexbox>
        </Page>
    )
}

export default BadgePage
