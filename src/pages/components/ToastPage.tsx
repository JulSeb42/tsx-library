/*=============================================== ToastPage ===============================================*/

import { Page } from "../../components"
import { Toast } from "../../lib"

const ToastPage = () => {
    return (
        <Page title="Toast">
            <Toast title="Title" />

            <Toast
                title="Title"
                icon={{ name: "check-circle" }}
                withCloseButton
            >
                Content
            </Toast>

            <Toast
                title="Super long title title title title title title"
                icon={{ name: "check-circle", color: "success" }}
                maxWidth={400}
                withCloseButton
            >
                Content
            </Toast>

            <Toast
                title="Title"
                icon={{ name: "close-circle", color: "danger" }}
                withCloseButton="close-circle"
            >
                Content
            </Toast>
        </Page>
    )
}

export default ToastPage
