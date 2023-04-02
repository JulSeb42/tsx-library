/*=============================================== MarkdownContainerPage ===============================================*/

import { Page } from "../../components"
import { MarkdownContainer } from "../../lib"

const MarkdownContainerPage = () => {
    const post =
        "## Hello world \n\n I'm some markdown content **compiled** to *jsx*"

    return (
        <Page title="MarkdownContainer">
            <MarkdownContainer content={post} />
        </Page>
    )
}

export default MarkdownContainerPage
