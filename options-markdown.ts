/*=============================================== Options markdown container ===============================================*/

import * as Font from "./components/Font"
import Table from "./components/Table"

const optionsMarkdown = {
    forceBlock: true,

    wrapper: "div",

    overrides: {
        h1: {
            component: Font.H1,
        },

        h2: {
            component: Font.H2,
        },

        h3: {
            component: Font.H3,
        },

        h4: {
            component: Font.H4,
        },

        h5: {
            component: Font.H5,
        },

        h6: {
            component: Font.H6,
        },

        p: {
            component: Font.P,
        },

        strong: {
            component: Font.Strong,
        },

        em: {
            component: Font.Em,
        },

        ul: {
            component: Font.Ul,
        },

        ol: {
            component: Font.Ol,
        },

        dl: {
            component: Font.Dl,
        },

        small: {
            component: Font.Small,
        },

        blockquote: {
            component: Font.Blockquote,
        },

        table: {
            component: Table,
        },
    },
}

export default optionsMarkdown
