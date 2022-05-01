// Packages
import React, { Suspense } from "react";
// Import styles
import { Fallback, Container, Caption } from "./style";
const Img = React.lazy(() => import("./Img"));
const Image = props => {
    return (React.createElement(Suspense, { fallback: React.createElement(Fallback, { width: props.width || "100%", height: props.height || "auto" }) },
        React.createElement(Container, { width: props.width || "100%", height: props.height || "auto", className: props.className },
            React.createElement(Img, Object.assign({ width: props.width || "100%", height: props.height || "auto", fit: props.fit }, props)),
            props.caption && React.createElement(Caption, null, props.caption))));
};
export default Image;
