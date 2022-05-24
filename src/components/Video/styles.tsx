// Imports
import styled, { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import { styleProps } from "./types"

const Container = styled.video<styleProps>`
    width: ${({ width }) => (width ? stringifyPx(width) : "100%")};
    height: ${({ height }) => (height ? stringifyPx(height) : "auto")};
    object-fit: ${({ fit }) => fit};

    ${({ aspectRatio }) =>
        aspectRatio &&
        css`
            height: inherit;
            aspect-ratio: ${aspectRatio};
        `}

    ${({ youtube, width, height, aspectRatio }) =>
        youtube &&
        css`
            width: ${width};
            height: ${!aspectRatio ? height : "inherit"};
        `}
`

export { Container }
