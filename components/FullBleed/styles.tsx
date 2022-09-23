/*=============================================== FullBleed styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SpacersTypes } from "../../utils/common-types"

const StyledFullBleed = styled.div<{
    $padding?: SpacersTypes | number
    $paddingLeft?: SpacersTypes | number
    $paddingTop?: SpacersTypes | number
    $paddingRight?: SpacersTypes | number
    $paddingBottom?: SpacersTypes | number
    $paddingLeftRight?: SpacersTypes | number
    $paddingTopBottom?: SpacersTypes | number
    $height?: string | number
    $aspectRatio?: string
}>`
    grid-column: 1/4 !important;
    padding: ${({ $padding }) => Mixins.Spacers({ $spacer: $padding })};
    padding-left: ${({ $paddingLeft, $paddingLeftRight }) =>
        Mixins.Spacers({ $spacer: $paddingLeft || $paddingLeftRight })};
    padding-top: ${({ $paddingTop, $paddingTopBottom }) =>
        Mixins.Spacers({ $spacer: $paddingTop || $paddingTopBottom })};
    padding-right: ${({ $paddingRight, $paddingLeftRight }) =>
        Mixins.Spacers({ $spacer: $paddingRight || $paddingLeftRight })};
    padding-bottom: ${({ $paddingBottom, $paddingTopBottom }) =>
        Mixins.Spacers({ $spacer: $paddingBottom || $paddingTopBottom })};
    width: 100%;
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};

    ${({ $height }) =>
        $height &&
        css`
            height: ${stringifyPx($height)};
        `}
`

setDefaultTheme([StyledFullBleed])

export { StyledFullBleed }
