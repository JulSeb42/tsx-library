/*=============================================== SpacersPage ===============================================*/

import React from "react"
import { uuid, Grid } from "../../lib"

import { Page, DemoCard } from "../../components"

import { allSpacers } from "../../data"

const SpacersPage = () => {
    return (
        <Page title="Spacers">
            <Grid col={3} gap="s">
                {allSpacers.map(spacer => (
                    <DemoCard spacer={spacer} key={uuid()} />
                ))}
            </Grid>
        </Page>
    )
}

export default SpacersPage
