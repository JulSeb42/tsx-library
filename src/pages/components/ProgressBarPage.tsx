/*=============================================== ProgressBarPage ===============================================*/

import { Page } from "../../components"
import { ProgressBar, getRandomNumber } from "../../lib"

const ProgressBarPage = () => {
    return (
        <Page title="ProgressBar">
            <ProgressBar value={getRandomNumber(0, 100)} color="primary" />
            <ProgressBar
                value={getRandomNumber(0, 100)}
                color="secondary"
                animated={false}
            />
            <ProgressBar value={getRandomNumber(0, 100)} color="success" />
            <ProgressBar value={getRandomNumber(0, 100)} color="danger" />
            <ProgressBar value={getRandomNumber(0, 100)} color="warning" />
            <ProgressBar value={getRandomNumber(0, 100)} color="gray" />
            <ProgressBar value={getRandomNumber(0, 100)} color="black" />
            <ProgressBar value={getRandomNumber(0, 100)} color="white" />

            <div style={{ height: 400 }}>
                <ProgressBar
                    value={getRandomNumber(0, 100)}
                    color="primary"
                    direction="vertical"
                />
            </div>
        </Page>
    )
}

export default ProgressBarPage
