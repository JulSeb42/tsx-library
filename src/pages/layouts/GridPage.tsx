/*=============================================== GridPage ===============================================*/

import React from "react"
import { Page, GridItem } from "../../components"
import { Grid } from "../../lib"

const GridPage = () => {
    return (
        <Page title="Grid">
            <Grid col={4} columnGap="xs" rowGap="l">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </Grid>
        </Page>
    )
}

export default GridPage
