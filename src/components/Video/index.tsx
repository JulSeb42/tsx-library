// Packages
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { convertYoutube } from "ts-utils-julseb"

// Types
interface styleProps extends React.HTMLAttributes<HTMLVideoElement> {
    width?: string | number
    height?: string | number
    fit?: string
    aspectRatio?: string
    youtube?: string
    allow?: string
    frameBorder?: string
    allowFullScreen?: boolean
}

interface props extends styleProps {
    src?: string
    controls?: boolean
    autoPlay?: boolean
}

// Styles
const Container = styled.video<styleProps>`
    width: ${props => props.width};
    height: ${props => props.height};

    ${props =>
        props.fit &&
        css`
            object-fit: ${props.fit};
        `}

    ${props =>
        props.aspectRatio &&
        css`
            height: inherit;
            aspect-ratio: ${props.aspectRatio};
        `}

    ${props =>
        props.youtube &&
        css`
            width: ${props.width || "100%"};
            height: ${!props.aspectRatio ? props.height || "30vw" : "inherit"};
        `}
`

const Video: React.FC<props> = props => {
    return props.youtube ? (
        <Container
            as="iframe"
            src={convertYoutube(props.youtube)}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            aspectRatio={props.aspectRatio && props.aspectRatio}
            allowFullScreen
            width={props.width || "100%"}
            height={props.height || "auto"}
            {...props}
        />
    ) : props.autoPlay ? (
        <Container
            muted
            autoPlay={true}
            loop
            aspectRatio={props.aspectRatio && props.aspectRatio}
            width={props.width || "100%"}
            height={props.height || "auto"}
            {...props}
        >
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
        </Container>
    ) : (
        <Container
            aspectRatio={props.aspectRatio && props.aspectRatio}
            width={props.width || "100%"}
            height={props.height || "auto"}
            {...props}
        >
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
        </Container>
    )
}

export default Video
