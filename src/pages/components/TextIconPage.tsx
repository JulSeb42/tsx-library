/*=============================================== TextIconPage ===============================================*/

import { Page } from "../../components"
import { TextIcon } from "../../lib"

const TextIconPage = () => {
    return (
        <Page title="TextIcon">
            <TextIcon icon="arrow-right" tag="h1" display>
                Hello
            </TextIcon>

            <TextIcon icon="arrow-right" tag="h6">
                Hello
            </TextIcon>

            <TextIcon icon="arrow-right" iconColor="secondary">
                Hello
            </TextIcon>
        </Page>
    )
}

export default TextIconPage
