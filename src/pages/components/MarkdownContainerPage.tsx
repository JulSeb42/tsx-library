/*=============================================== MarkdownContainerPage ===============================================*/

import { Page } from "../../components"
import { MarkdownContainer } from "../../lib"

const MarkdownContainerPage = () => {
    const post =
        "## Hello world \n\n I'm some markdown content **compiled** to *jsx*"

    return (
        <Page title="MarkdownContainer">
            <MarkdownContainer>{post}</MarkdownContainer>
        </Page>
    )
}

export default MarkdownContainerPage
