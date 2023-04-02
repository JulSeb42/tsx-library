/*=============================================== GridPage ===============================================*/

import { Page, GridItem } from "../../components"
import { Grid } from "../../lib"

const GridPage = () => {
    return (
        <Page title="Grid">
            <Grid col={4} gap="s">
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
