/*=============================================== Image ===============================================*/

/*==================== Imports ====================*/

import React, { Suspense } from "react"
import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../../Variables"
import Text from "../Text"
import Fallback from "../Fallback"

import { ObjectFitTypes } from "../../common-types"

const Img = React.lazy(() => import("./Img"))

/*==================== Component ====================*/

const Image = ({
    src,
    alt,
    options,
    width = "100%",
    height = "auto",
    ...props
}: Props) => (
    <Suspense fallback={<Fallback $width={width} $height={height} />}>
        {options?.caption ? (
            <StyledImageContainer $width={width} $height={height} {...props}>
                <Img
                    src={src}
                    alt={alt}
                    $width={width}
                    $height={height}
                    $fit={options?.fit}
                />

                <Caption
                    $background={
                        typeof options.caption === "object"
                            ? options.caption.background
                            : "black"
                    }
                >
                    {typeof options.caption === "object"
                        ? options.caption.text
                        : options.caption}
                </Caption>
            </StyledImageContainer>
        ) : (
            <Img
                src={src}
                alt={alt}
                $width={width}
                $height={height}
                $fit={options?.fit}
                {...props}
            />
        )}
    </Suspense>
)

export default Image

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width?: number | string
    height?: number | string

    options?: {
        fit?: ObjectFitTypes
        caption?:
            | string
            | {
                  text: string
                  background: "black" | "white"
              }
    }
}

/*==================== Styles ====================*/

const StyledImageContainer = styled.div<{
    $width?: number | string
    $height?: number | string
}>`
    width: ${({ $width }) => ($width ? stringifyPx($width) : "")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "")};
    position: relative;
`

const Caption = styled(Text)<{ $background?: "black" | "white" }>`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ $background }) =>
        $background === "white"
            ? Variables.Overlays.Plain.White80
            : Variables.Overlays.Plain.Black80};
    padding: ${Variables.Spacers.M};
    color: ${({ $background }) =>
        $background === "white"
            ? Variables.Colors.Black
            : Variables.Colors.White};
`
