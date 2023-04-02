/*=============================================== LinkifyPage ===============================================*/

import { Page } from "../../components"
import { Linkify } from "../../lib"

const LinkifyPage = () => {
    return (
        <Page title="Linkify">
            <Linkify blank>
                Hello world https://julien-sebag.com/ foo baz
            </Linkify>
        </Page>
    )
}

export default LinkifyPage
