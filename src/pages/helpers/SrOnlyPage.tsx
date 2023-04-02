/*=============================================== SrOnlyPage ===============================================*/

import { Page } from "../../components"
import { SrOnly } from "../../lib"

const SrOnlyPage = () => {
    return (
        <Page title="SrOnly">
            <SrOnly as="h1">Hello</SrOnly>
        </Page>
    )
}

export default SrOnlyPage
