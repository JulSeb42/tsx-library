/*=============================================== FooterPage ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text } from "../../lib"

const FooterPage = () => {
    return (
        <Page title="Footer">
            <Text>
                <Link
                    to="/footer/demo-no-separator"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo without separator
                </Link>
            </Text>

            <Text>
                <Link
                    to="/footer/demo-separator"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo with separator
                </Link>
            </Text>
        </Page>
    )
}

export default FooterPage
