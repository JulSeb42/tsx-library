/*=============================================== HeaderPage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text } from "../../lib"

const HeaderPage = () => {
    return (
        <Page title="Header">
            <Text>
                <Link
                    to="/header/demo"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo here
                </Link>
            </Text>
        </Page>
    )
}

export default HeaderPage
