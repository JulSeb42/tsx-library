/*=============================================== KeyPage ===============================================*/

import { Page } from "../../components"
import { Key } from "../../lib"

const KeyPage = () => {
    return (
        <Page title="Key">
            <Key keys={["⌘", "K"]} accentColor="success" />

            <Key keys={["⌘", "K"]} separator />
        </Page>
    )
}

export default KeyPage
