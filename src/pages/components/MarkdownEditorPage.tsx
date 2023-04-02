/*=============================================== MarkdownEditorPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { MarkdownEditor } from "../../lib"

const MarkdownEditorPage = () => {
    const [body, setBody] = useState("Hello")

    return (
        <Page title="MarkdownEditor">
            <MarkdownEditor
                value={body}
                setValue={setBody}
                label="Label"
                helper="Helper"
                // helperBottom="Bottom"
                accentColor="secondary"
                autoFocus
                counter
                maxLength={1200}
            />
        </Page>
    )
}

export default MarkdownEditorPage
