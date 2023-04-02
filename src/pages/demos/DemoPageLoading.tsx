/*=============================================== DemoPageLoading ===============================================*/

import { DefaultLayout } from "../../components"
import { PageLoading } from "../../lib"

const DemoPageLoading = () => {
    return (
        <DefaultLayout title="Page loading">
            <PageLoading backgroundColor="secondary" />
        </DefaultLayout>
    )
}

export default DemoPageLoading
