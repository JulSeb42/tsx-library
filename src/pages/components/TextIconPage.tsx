/*=============================================== TextIconPage ===============================================*/

import { Page } from "../../components"
import { TextIcon } from "../../lib"

const TextIconPage = () => {
    return (
        <Page title="TextIcon">
            <TextIcon icon="arrow-right" tag="h1" display>
                Hello
            </TextIcon>
        </Page>
    )
}

export default TextIconPage
