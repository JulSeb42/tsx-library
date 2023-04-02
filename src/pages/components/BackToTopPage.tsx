/*=============================================== BackToTopPage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text } from "../../lib"

const BackToTopPage = () => {
    return (
        <Page title="BackToTop">
            <Text>
                <Link
                    to="/back-to-top/demo"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo
                </Link>
            </Text>
        </Page>
    )
}

export default BackToTopPage
