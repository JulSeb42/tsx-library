/*=============================================== Image ===============================================*/

/*==================== Imports ====================*/

import React, { Suspense } from "react"
import styled from "styled-components"

import Variables from "../Variables"
import Text from "../Text"
import Fallback from "../Fallback"

import { ObjectFitTypes } from "../../common-types"

const Img = React.lazy(() => import("./Img"))

/*==================== Component ====================*/

const Image = ({ src, alt, options, width = "100%", height = "auto", ...props }: Props) => (
    <Suspense fallback={<Fallback $width={width} $height={height} />}>
        {options?.caption ? (
            <StyledImageContainer $width={width} $height={height} {...props}>
                <Img src={src} alt={alt} $width={width} $height={height} $fit={options?.fit} />

                <Caption>{options.caption}</Caption>
            </StyledImageContainer>
        ) : (
            <Img src={src} alt={alt} $width={width} $height={height} $fit={options?.fit} {...props} />
        )}
    </Suspense>
)

export default Image

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLImageElement> {
    $width?: number | string
    $height?: number | string
}

interface Props extends React.HTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width?: number | string
    height?: number | string

    options?: {
        fit?: ObjectFitTypes
        caption?: string
    }
}

/*==================== Styles ====================*/

const StyledImageContainer = styled.div<StyleProps>`
    position: relative;
`

const Caption = styled(Text)`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${Variables.Overlays.Plain.Black80};
    padding: ${Variables.Spacers.M};
    color: ${Variables.Colors.White};
`
