/*=============================================== OptionsMarkdownPage ===============================================*/

import { Page } from "../../components"
import { CodeContainer } from "../../lib"

const OptionsMarkdownPage = () => {
    return (
        <Page title="Options Markdown">
            <CodeContainer>
                {
                    'const OptionsMarkdown = {\n    forceBlock: true,\n\n    wrapper: "div",\n\n    overrides: {\n        h1: {\n            component: Text,\n            props: {\n                tag: "h1",\n            },\n        },\n\n        h2: {\n            component: Text,\n            props: {\n                tag: "h2",\n            },\n        },\n\n        h3: {\n            component: Text,\n            props: {\n                tag: "h3",\n            },\n        },\n\n        h4: {\n            component: Text,\n            props: {\n                tag: "h4",\n            },\n        },\n\n        h5: {\n            component: Text,\n            props: {\n                tag: "h5",\n            },\n        },\n\n        h6: {\n            component: Text,\n            props: {\n                tag: "h6",\n            },\n        },\n\n        p: {\n            component: Text,\n            props: {\n                tag: "p",\n            },\n        },\n\n        strong: {\n            component: Text,\n            props: {\n                tag: "strong",\n            },\n        },\n\n        em: {\n            component: Text,\n            props: {\n                tag: "em",\n            },\n        },\n\n        ul: {\n            component: Text,\n            props: {\n                tag: "ul",\n            },\n        },\n\n        ol: {\n            component: Text,\n            props: {\n                tag: "ol",\n            },\n        },\n\n        dl: {\n            component: Text,\n            props: {\n                tag: "dl",\n            },\n        },\n\n        small: {\n            component: Text,\n            props: {\n                tag: "small",\n            },\n        },\n\n        blockquote: {\n            component: Text,\n            props: {\n                tag: "blockquote",\n            },\n        },\n\n        table: {\n            component: Table,\n        },\n    },\n}'
                }
            </CodeContainer>
        </Page>
    )
}

export default OptionsMarkdownPage
