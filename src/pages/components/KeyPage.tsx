/*=============================================== KeyPage ===============================================*/

import { Page } from "../../components"
import { Key } from "../../lib"

const KeyPage = () => {
    return (
        <Page title="Key">
            <Key keys={["⌘", "K"]} accentColor="success" />

            <Key keys={["⌘", "K"]} withSeparator />
        </Page>
    )
}

export default KeyPage
