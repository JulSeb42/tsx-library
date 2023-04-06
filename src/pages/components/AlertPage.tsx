/*=============================================== AlertPage ===============================================*/

import { Page } from "../../components"
import { Alert, Flexbox, Button, Text } from "../../lib"

const AlertPage = () => {
    return (
        <Page title="Alert">
            <Alert color="primary">Alert</Alert>
            <Alert color="secondary">Alert</Alert>
            <Alert color="success">Alert</Alert>
            <Alert color="danger">Alert</Alert>
            <Alert color="warning">Alert</Alert>
            <Alert color="white">Alert</Alert>

            <Alert color="danger">
                <Text>Alert with button</Text>

                <Flexbox alignItems="center" gap="xs">
                    <Button color="danger">Button</Button>
                    <Button variant="text">Button</Button>
                </Flexbox>
            </Alert>
        </Page>
    )
}

export default AlertPage
