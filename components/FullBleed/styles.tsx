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
    $height?: string | number
    $aspectRatio?: string
}>`
    grid-column: 1/4 !important;
    padding: ${({ $padding }) => Mixins.Spacers({ $spacer: $padding })};
    padding-left: ${({ $paddingLeft }) =>
        Mixins.Spacers({ $spacer: $paddingLeft })};
    padding-top: ${({ $paddingTop }) =>
        Mixins.Spacers({ $spacer: $paddingTop })};
    padding-right: ${({ $paddingRight }) =>
        Mixins.Spacers({ $spacer: $paddingRight })};
    padding-bottom: ${({ $paddingBottom }) =>
        Mixins.Spacers({ $spacer: $paddingBottom })};
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
