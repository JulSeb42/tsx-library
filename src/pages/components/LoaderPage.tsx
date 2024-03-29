/*=============================================== LoaderPage ===============================================*/

import { Page } from "../../components"
import { Loader, Flexbox } from "../../lib"

const LoaderPage = () => {
    return (
        <Page title="Loader">
            <Flexbox flexDirection="column" gap="s">
                <Loader
                    variant={1}
                    size={120}
                    borderWidth={24}
                    color="secondary"
                />
                <Loader variant={2} />
                <Loader variant={3} />
                <Loader variant={4} />
            </Flexbox>
        </Page>
    )
}

export default LoaderPage
