/*=============================================== CoverPage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text } from "../../lib"

const CoverPage = () => {
    return (
        <Page title="Cover">
            <Text>
                <Link
                    to="/cover/cover-center"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo cover center
                </Link>
            </Text>

            <Text>
                <Link
                    to="/cover/cover-center-overlay"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo cover center overlay
                </Link>
            </Text>

            <Text>
                <Link
                    to="/cover/cover-bottom"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo cover bottom
                </Link>
            </Text>

            <Text>
                <Link
                    to="/cover/cover-bottom-overlay"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo cover bottom overlay
                </Link>
            </Text>
        </Page>
    )
}

export default CoverPage
