/*=============================================== ComponentsPropsPage ===============================================*/

import { Page } from "../../components"
import { Table, CodeContainer, uuid } from "../../lib"

import { allProps } from "../../data"

const ComponentsPropsPage = () => {
    const headers = ["Name", "Component", "Content"]

    return (
        <Page title="Components props">
            <Table variant="border-bottom" vAlign="text-top">
                <thead>
                    <tr>
                        {headers.map(item => (
                            <th key={uuid()}>{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {allProps.map(prop => (
                        <tr key={uuid()}>
                            <td>{prop.name}</td>
                            <td>{prop.component}</td>
                            <td style={{ padding: 0 }}>
                                <CodeContainer color="white" copyButton={false}>
                                    {prop.content}
                                </CodeContainer>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Page>
    )
}

export default ComponentsPropsPage
