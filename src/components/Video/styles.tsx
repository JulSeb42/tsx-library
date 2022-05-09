// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { stringifyPx } from "ts-utils-julseb"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.video<styleProps>`
    width: ${props => (props.width ? stringifyPx(props.width) : "100%")};
    height: ${props =>
        props.height ? stringifyPx(props.height) : props.height};

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
            width: ${props.width};
            height: ${!props.aspectRatio ? props.height : "inherit"};
        `}
`

export { Container }
