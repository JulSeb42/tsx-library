/*=============================================== ColorsPage ===============================================*/

import React from "react"
import { uuid, Grid } from "../../lib"

import { Page, ColorCard } from "../../components"

import { allColors } from "../../data"

const ColorsPage = () => {
    return (
        <Page title="Colors">
            <Grid col={2} gap="s">
                {allColors.map(color => (
                    <ColorCard color={color} key={uuid()} />
                ))}
            </Grid>
        </Page>
    )
}

export default ColorsPage
