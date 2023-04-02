/*=============================================== VariablesPage ===============================================*/

import { Page } from "../../components"
import { Table, uuid, Section, Text } from "../../lib"

import {
    allColors,
    allOverlays,
    allFontFamilies,
    allFontSizes,
    allFontWeights,
    allLineHeights,
    allShadows,
    allRadiuses,
    allSpacers,
    allTransitions,
    allLayouts,
} from "../../data"

const VariablesPage = () => {
    const headers = ["Name", "Variable", "CSS", "Value"]
    const headersLayouts = headers.concat("Value tablet")

    type list = {
        name: string
        list: any
    }

    const allLists: list[] = [
        {
            name: "Colors",
            list: allColors,
        },
        {
            name: "Overlay",
            list: allOverlays,
        },
        {
            name: "Font families",
            list: allFontFamilies,
        },
        {
            name: "Font sizes",
            list: allFontSizes,
        },
        {
            name: "Font weights",
            list: allFontWeights,
        },
        {
            name: "Line heights",
            list: allLineHeights,
        },
        {
            name: "Shadows",
            list: allShadows,
        },
        {
            name: "Radiuses",
            list: allRadiuses,
        },
        {
            name: "Spacers",
            list: allSpacers,
        },
        {
            name: "Transitions",
            list: allTransitions,
        },
    ]

    return (
        <Page title="Variables">
            {allLists.map(list => (
                <Section gap="xs" key={uuid()}>
                    <Text tag="h2">{list.name}</Text>

                    <Table variant="border-bottom" vAlign="text-top">
                        <thead>
                            <tr>
                                {headers.map(item => (
                                    <td key={uuid()}>{item}</td>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {list.list.map((item: any) => (
                                <tr key={uuid()}>
                                    <td>{item.name}</td>
                                    <td>{item.variable}</td>
                                    <td>{item.css}</td>
                                    <td>
                                        {list.name === "Colors"
                                            ? item.rgb
                                            : item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Section>
            ))}

            <Section gap="xs">
                <Text tag="h2">Layouts</Text>

                <Table variant="border-bottom" vAlign="text-top">
                    <thead>
                        <tr>
                            {headersLayouts.map(item => (
                                <td key={uuid()}>{item}</td>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {allLayouts.map(item => (
                            <tr key={uuid()}>
                                <td>{item.name}</td>
                                <td>{item.variable}</td>
                                <td>{item.css}</td>
                                <td>{item.value}</td>
                                <td>{item.valueTablet}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Section>
        </Page>
    )
}

export default VariablesPage
