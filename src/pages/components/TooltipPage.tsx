/*=============================================== TooltipPage ===============================================*/

import { Page } from "../../components"
import { Tooltip, Text } from "../../lib"

const TooltipPage = () => {
    return (
        <Page title="Tooltip">
            <Text>
                Text with <Tooltip tooltip="Tooltip">tooltip</Tooltip> text
            </Text>
        </Page>
    )
}

export default TooltipPage
