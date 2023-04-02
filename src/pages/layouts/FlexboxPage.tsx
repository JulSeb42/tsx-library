/*=============================================== FlexboxPage ===============================================*/

import { Page, GridItem } from "../../components"
import { Flexbox } from "../../lib"

const FlexboxPage = () => {
    return (
        <Page title="Flexbox">
            <Flexbox
                flexDirection="column-reverse"
                gap="l"
                alignItems="flex-end"
                justifyContent="flex-end"
            >
                <GridItem />
                <GridItem>Longer item</GridItem>
                <GridItem />
                <GridItem>Even longer item</GridItem>
            </Flexbox>
        </Page>
    )
}

export default FlexboxPage
