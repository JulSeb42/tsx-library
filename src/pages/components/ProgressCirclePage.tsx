/*=============================================== ProgressCirclePage ===============================================*/

import { Page } from "../../components"
import { ProgressCircle } from "../../lib"

const ProgressCirclePage = () => {
    return (
        <Page title="ProgressCircle">
            <ProgressCircle value={10} showValue />
        </Page>
    )
}

export default ProgressCirclePage
