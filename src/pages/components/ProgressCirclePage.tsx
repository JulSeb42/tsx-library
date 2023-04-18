/*=============================================== ProgressCirclePage ===============================================*/

import { Page } from "../../components"
import { ProgressCircle, getRandomNumber } from "../../lib"

const ProgressCirclePage = () => {
    return (
        <Page title="ProgressCircle">
            <ProgressCircle value={getRandomNumber()} showValue />
        </Page>
    )
}

export default ProgressCirclePage
