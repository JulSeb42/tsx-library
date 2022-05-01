// Packages
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { convertYoutube } from "ts-utils-julseb";
// Styles
const Container = styled.video `
    width: ${props => props.width};
    height: ${props => props.height};

    ${props => props.fit &&
    css `
            object-fit: ${props.fit};
        `}

    ${props => props.aspectRatio &&
    css `
            height: inherit;
            aspect-ratio: ${props.aspectRatio};
        `}

    ${props => props.youtube &&
    css `
            width: ${props.width || "100%"};
            height: ${!props.aspectRatio ? props.height || "30vw" : "inherit"};
        `}
`;
const Video = props => {
    return props.youtube ? (React.createElement(Container, Object.assign({ as: "iframe", src: convertYoutube(props.youtube), frameBorder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", aspectRatio: props.aspectRatio && props.aspectRatio, allowFullScreen: true, width: props.width || "100%", height: props.height || "auto" }, props))) : props.autoPlay ? (React.createElement(Container, Object.assign({ muted: true, autoPlay: true, loop: true, aspectRatio: props.aspectRatio && props.aspectRatio, width: props.width || "100%", height: props.height || "auto" }, props),
        React.createElement("source", { src: props.src, type: "video/mp4" }),
        "Your browser does not support the video tag.")) : (React.createElement(Container, Object.assign({ aspectRatio: props.aspectRatio && props.aspectRatio, width: props.width || "100%", height: props.height || "auto" }, props),
        React.createElement("source", { src: props.src, type: "video/mp4" }),
        "Your browser does not support the video tag."));
};
export default Video;
