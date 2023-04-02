/*=============================================== MixinsPage ===============================================*/

import styled from "styled-components"

import { Page } from "../../components"
import { Table, CodeContainer, uuid } from "../../lib"

import { allMixins } from "../../data"

const CodeTd = styled.td`
    padding: 0 !important;

    code {
        background-color: transparent;
        color: white;
        height: 100%;
        font-size: 14;
    }
`

const MixinsPage = () => {
    const headers = ["Name", "Effect", "Variables", "Example"]

    return (
        <Page title="Mixins">
            <Table variant="border-bottom" vAlign="text-top">
                <thead>
                    <tr>
                        {headers.map(item => (
                            <th key={uuid()}>{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {allMixins.map(mixin => (
                        <tr key={uuid()}>
                            <td>{mixin.name}</td>
                            <td>{mixin.effect}</td>
                            <td>{mixin.variables}</td>
                            <CodeTd>
                                <CodeContainer copyButton={false}>
                                    {mixin.example}
                                </CodeContainer>
                            </CodeTd>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Page>
    )
}

export default MixinsPage
