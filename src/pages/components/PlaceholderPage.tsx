/*=============================================== PlaceholderPage ===============================================*/

import { Page } from "../../components"
import { Placeholder } from "../../lib"

const PlaceholderPage = () => {
    return (
        <Page title="Placeholder">
            <Placeholder
                width={200}
                height={50}
                background="secondary"
                shadow="xxl"
                textColor="danger"
                borderRadius="l"
                fontSize="title-h2"
                padding={{
                    top: "xxs",
                    bottom: "xxl",
                    leftRight: 100,
                }}
            >
                Hello
            </Placeholder>
        </Page>
    )
}

export default PlaceholderPage
