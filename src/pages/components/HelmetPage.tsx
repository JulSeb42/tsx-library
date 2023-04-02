/*=============================================== HelmetPage ===============================================*/

import { Page } from "../../components"
import { Helmet } from "../../lib"

const HelmetPage = () => {
    return (
        <Page title="Helmet">
            <Helmet title="Helmet title" />
        </Page>
    )
}

export default HelmetPage
