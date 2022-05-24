// Imports
import * as Font from "./Font"

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
            component: Font.List,
        },

        small: {
            component: Font.Small,
        },
    },
}

export default optionsMarkdown
