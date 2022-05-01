// Packages
import React from "react";
import { Helmet as HelmetMeta } from "react-helmet";
const Helmet = props => {
    return (React.createElement(HelmetMeta, null,
        React.createElement("title", null, props.title),
        React.createElement("link", { rel: "icon", href: props.favicon }),
        React.createElement("meta", { content: "IE=edge", "http-equiv": "X-UA-Compatible" }),
        React.createElement("meta", { content: "width=device-width, initial-scale=1", name: "viewport" }),
        React.createElement("meta", { name: "description", content: props.description }),
        React.createElement("meta", { name: "keywords", content: props.keywords }),
        React.createElement("meta", { name: "author", content: props.author }),
        React.createElement("meta", { property: "og:title", content: props.title }),
        React.createElement("meta", { property: "og:type", content: props.type }),
        React.createElement("meta", { property: "og:image", content: props.cover }),
        React.createElement("meta", { property: "og:site_name", content: props.siteName }),
        React.createElement("meta", { property: "og:locale", content: props.language }),
        props.children));
};
export default Helmet;
