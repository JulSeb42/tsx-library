/*=============================================== RadiusesPage ===============================================*/

import React from "react"
import { uuid, Grid } from "../../lib"

import { Page, DemoCard } from "../../components"

import { allRadiuses } from "../../data"

const RadiusesPage = () => {
    return (
        <Page title="Radiuses">
            <Grid col={3} gap="s">
                {allRadiuses.map(radius => (
                    <DemoCard radius={radius} key={uuid()} />
                ))}
            </Grid>
        </Page>
    )
}

export default RadiusesPage
