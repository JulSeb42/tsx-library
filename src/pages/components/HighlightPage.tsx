/*=============================================== HighlightPage ===============================================*/

import React from "react"

import { Page } from "../../components"
import { Highlight } from "../../lib"

const HighlightPage = () => {
    return (
        <Page title="Highlight">
            <Highlight highlightedText="Hello">Hello world</Highlight>
        </Page>
    )
}

export default HighlightPage
