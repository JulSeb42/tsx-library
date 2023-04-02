/*=============================================== SectionPage ===============================================*/

import { Page } from "../../components"
import { Section, Text, uuid } from "../../lib"
import type { SpacersTypes } from "../../lib/types"

const SectionPage = () => {
    const sizes: SpacersTypes[] = ["xxl", "xl", "l", "m", "s", "xs", "xxs"]

    return (
        <Page title="Section">
            {sizes.map(size => (
                <Section gap={size} key={uuid()}>
                    <Text tag="h4">Gap {size}</Text>
                    <Text>Content</Text>
                </Section>
            ))}
        </Page>
    )
}

export default SectionPage
