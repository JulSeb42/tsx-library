/*=============================================== TablePage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import {
    Table,
    uuid,
    useExportData,
    Flexbox,
    Button,
    camelToCapitalize,
} from "../../lib"

const TablePage = () => {
    const users: User[] = [
        {
            id: 1,
            firstName: "Anna",
            lastName: "Fali",
            facebook: "Anna Fali",
            twitter: "@anna.fali",
        },
        {
            id: 2,
            firstName: "Niek",
            lastName: "Bove",
            facebook: "Niek Bove",
            twitter: "@niek.bove",
        },
        {
            id: 3,
            firstName: "Lacara",
            lastName: "Jones",
            facebook: "Lacara Jones",
            twitter: "@lacara.jones",
        },
        {
            id: 4,
            firstName: "Pablo",
            lastName: "Cambeiro",
            facebook: "Pablo Cambeiro",
            twitter: "@pablo.cambeiro",
        },
        {
            id: 5,
            firstName: "Irene",
            lastName: "Sotelo",
            facebook: "Irene Sotelo",
            twitter: "@irene.sotelo",
        },
    ]

    const headers: string[] = [
        ...new Set(users.map(user => Object.keys(user)).flat()),
    ]
    const formattedHeaders = headers.map(header => camelToCapitalize(header))

    const content = () =>
        users.map(({ id, firstName, lastName, facebook, twitter }) => (
            <tr key={uuid()}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                    <Link to="#">{facebook}</Link>
                </td>
                <td>
                    <Link to="#">{twitter}</Link>
                </td>
            </tr>
        ))

    const usersExport = users.map(user => {
        const { id, firstName, lastName, facebook, twitter } = user

        return [id, firstName, lastName, facebook, twitter].join(", ")
    })

    const { exportToCsv, exportToJson } = useExportData()

    return (
        <Page title="Table">
            <Flexbox gap="xs">
                <Button
                    onClick={() => exportToCsv(usersExport, "Users", headers)}
                >
                    Export to CSV ({users.length} rows)
                </Button>

                <Button onClick={() => exportToJson(users, "Users")}>
                    Export to JSON ({users.length} rows)
                </Button>
            </Flexbox>

            <Table variant="bordered" headers={formattedHeaders}>
                {content()}
            </Table>

            <Table variant="stripped" headers={formattedHeaders}>
                {content()}
            </Table>

            <Table variant="border-bottom" headers={formattedHeaders}>
                {content()}
            </Table>
        </Page>
    )
}

export default TablePage

type User = {
    id: number
    firstName: string
    lastName: string
    facebook: string
    twitter: string
}
