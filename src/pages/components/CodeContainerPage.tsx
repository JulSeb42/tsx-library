/*=============================================== CodeContainerPage ===============================================*/

import { Page } from "../../components"
import { CodeContainer, Section } from "../../lib"

const CodeContainerPage = () => {
    return (
        <Page title="Code container">
            <Section>
                <CodeContainer language="typescript">{`const Button = styled.button<{\n    $color: "red" | "blue"\n    $size?: "default" | "small" | "large"\n}>\`\n    border: none;\n    border-radius: 8px;\n    background-color: \${({ $color }) => $color};\n    font-size: \${({ $size }) =>\n        $size === "large" ? 18 : $size === "small" ? 14 : 16}px;\n    padding: \${({ $size }) =>\n        $size === "large"\n            ? \`6px 12px\`\n            : $size === "small"\n            ? \`2px 4px\`\n            : \`4px 8px\`};\n    color: white;\n\`\n\n<Button $color="red" $size="small">\n    Red\n</Button>\n\n<Button $color="blue" $size="large">\n    Blue\n</Button>`}</CodeContainer>
            </Section>
        </Page>
    )
}

export default CodeContainerPage
