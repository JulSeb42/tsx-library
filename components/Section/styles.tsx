/*=============================================== Section styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Mixins from "../../Mixins"

import { SizesTypes } from "./types"

const StyledSection = styled.section<{ $gap?: SizesTypes | number }>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap:
                $gap === "large"
                    ? "m"
                    : $gap === "medium"
                    ? "s"
                    : $gap === "small"
                    ? "xs"
                    : stringifyPx($gap),
        })};
    align-content: start;
    justify-items: start;

    & > div,
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6,
    & > p,
    & > ul,
    & > ol,
    & > dl,
    & > section,
    & > input,
    & > article,
    & > hr,
    & > pre,
    & > table,
    & > header,
    & > footer,
    & > iframe,
    & > nav,
    & > noscript,
    & > picture,
    & > select,
    & > textarea,
    & > form {
        justify-self: stretch;
    }
`

export { StyledSection }
