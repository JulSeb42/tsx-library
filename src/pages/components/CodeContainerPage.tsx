/*=============================================== CodeContainerPage ===============================================*/

import { Page } from "../../components"
import { CodeContainer } from "../../lib"

const CodeContainerPage = () => {
    return (
        <Page title="CodeContainer">
            <CodeContainer language="javascript">
                {
                    'const unslugify = str => {\n    return capitalize(str.replaceAll("-", " "))\n}'
                }
            </CodeContainer>
        </Page>
    )
}

export default CodeContainerPage
