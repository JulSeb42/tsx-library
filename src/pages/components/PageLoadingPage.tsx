/*=============================================== PageLoadingPage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text } from "../../lib"

const PageLoadingPage = () => {
    return (
        <Page title="PageLoading">
            <Text>
                <Link
                    to="/page-loading/demo"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo
                </Link>
            </Text>
        </Page>
    )
}

export default PageLoadingPage
