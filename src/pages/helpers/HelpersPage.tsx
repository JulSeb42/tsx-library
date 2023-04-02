/*=============================================== HelpersPage ===============================================*/

import { Page } from "../../components"
import { Table, uuid } from "../../lib"
import { allHelpers } from "../../data"

const HelpersPage = () => {
    const headers = ["Name", "Effect"]

    return (
        <Page title="Helpers">
            <Table variant="border-bottom" vAlign="text-top">
                <thead>
                    <tr>
                        {headers.map(item => (
                            <td key={uuid()}>{item}</td>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {allHelpers.map(({ name, effect }) => (
                        <tr key={uuid()}>
                            <td>{name}</td>
                            <td>{effect}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Page>
    )
}

export default HelpersPage
