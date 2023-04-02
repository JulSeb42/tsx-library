/*=============================================== ShadowsPage ===============================================*/

import { Page, DemoCard } from "../../components"
import { uuid, Grid } from "../../lib"

import { allShadows } from "../../data"

const ShadowsPage = () => {
    return (
        <Page title="Shadows">
            <Grid col={3} gap="s">
                {allShadows.map(shadow => (
                    <DemoCard shadow={shadow} key={uuid()} />
                ))}
            </Grid>
        </Page>
    )
}

export default ShadowsPage
