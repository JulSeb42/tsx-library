/*=============================================== TooltipPage ===============================================*/

import { Page } from "../../components"
import { Tooltip, Text } from "../../lib"

const TooltipPage = () => {
    return (
        <Page title="Tooltip">
            <Text>
                Text with{" "}
                <Tooltip tooltip="Tooltip" textStyle="dotted">
                    tooltip
                </Tooltip>{" "}
                text
            </Text>

            <Text>
                Text with{" "}
                <Tooltip
                    tooltip="Tooltip"
                    textStyle="underline"
                    color="secondary"
                >
                    tooltip
                </Tooltip>{" "}
                text
            </Text>

            <Text>
                Text with{" "}
                <Tooltip tooltip="Tooltip" textStyle="bold" color="success-300">
                    tooltip
                </Tooltip>{" "}
                text
            </Text>
        </Page>
    )
}

export default TooltipPage
