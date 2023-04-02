/*=============================================== ToastPage ===============================================*/

import { Page } from "../../components"
import { Toast } from "../../lib"

const ToastPage = () => {
    return (
        <Page title="Toast">
            <Toast title="Title" />

            <Toast title="Title" icon={{ name: "check-circle" }} close>
                Content
            </Toast>

            <Toast
                title="Super long title title title title title title"
                icon={{ name: "check-circle", color: "success" }}
                position={{ position: "fixed", bottom: "xxl", right: "xxl" }}
                maxWidth={400}
                shadow="s"
                border={{
                    color: "secondary",
                }}
                close
            >
                Content
            </Toast>

            <Toast
                title="Title"
                icon={{ name: "close-circle", color: "danger" }}
                close="close-circle"
            >
                Content
            </Toast>
        </Page>
    )
}

export default ToastPage
