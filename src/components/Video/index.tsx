// Imports
import React from "react"
import { convertYoutube } from "js-utils-julseb"

import { props } from "./types"

import { Container } from "./styles"

const Video: React.FC<props> = ({
    youtube,
    width,
    height = youtube ? "30vw" : "auto",
    fit,
    aspectRatio,
    allow,
    frameBorder,
    allowFullScreen,
    src,
    controls,
    autoPlay,
    ...props
}) => {
    return youtube ? (
        <Container
            as="iframe"
            src={convertYoutube(youtube)}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            aspectRatio={aspectRatio && aspectRatio}
            allowFullScreen
            width={width}
            height={height}
        />
    ) : autoPlay ? (
        <Container
            muted
            autoPlay={true}
            loop
            aspectRatio={aspectRatio && aspectRatio}
            width={width}
            height={height}
            fit={fit}
            {...props}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </Container>
    ) : (
        <Container
            aspectRatio={aspectRatio && aspectRatio}
            width={width}
            height={height}
            fit={fit}
            controls={controls}
            {...props}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </Container>
    )
}

export default Video
