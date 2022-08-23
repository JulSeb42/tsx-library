/*=============================================== Cover ===============================================*/

/*==================== Imports ====================*/

import React, { Suspense } from "react"
import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../Mixins"
import Fallback from "../Fallback"

import { SpacerTypes } from "../../common-types"

const CoverImage = React.lazy(() => import("./CoverImage"))

/*==================== Component ====================*/

const Cover = ({ src, alt, children, options, ...props }: Props) => (
    <StyledCover
        $overlay={options?.overlay}
        $height={options?.height || "100vh"}
        {...props}
    >
        <Suspense
            fallback={
                <Fallback $width="100%" $height={options?.height || "100vh"} />
            }
        >
            <CoverImage src={src} alt={alt} />
        </Suspense>

        <Content $align={options?.align || "center"} $gap={options?.gap}>
            {children}
        </Content>
    </StyledCover>
)

export default Cover

/*==================== Types ====================*/

const align = {
    center: "center",
    bottom: "bottom",
} as const

type AlignTypes = keyof typeof align

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string
    alt: string
    children: React.ReactNode | React.ReactNode[]

    options?: {
        overlay?: "black" | "white" | "gradient-black" | "gradient-white"
        align?: AlignTypes
        height?: number | string
        gap?: SpacerTypes | string | number
    }
}

/*==================== Styles ====================*/

const Content = styled.div<{
    $align?: AlignTypes
    $height?: number | string
    $gap?: SpacerTypes | string | number
}>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    color: ${Variables.Colors.White};
    width: 100%;
    height: 100%;
    ${({ $align, $gap }) =>
        Mixins.Flexbox({
            $alignItems: $align === "bottom" ? "flex-start" : "center",
            $justifyContent: $align === "bottom" ? "flex-end" : "center",
            $flexDirection: "column",
            $gap: $gap || "s",
        })};
    padding: ${Variables.Spacers.XXL} 5%;
    text-align: ${({ $align }) => $align === "center" && "center"};

    & > * {
        position: relative;
        top: 0;
    }
`

const StyledCover = styled.div<{
    $overlay?: "black" | "white" | "gradient-black" | "gradient-white"
    $height?: number | string
}>`
    position: relative;
    width: 100%;
    height: ${({ $height }) => $height};

    ${({ $overlay }) =>
        $overlay &&
        css`
            ${Content} {
                color: ${$overlay === "white" || $overlay === "gradient-white"
                    ? Variables.Colors.Black
                    : Variables.Colors.White};
            }

            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                background: ${$overlay === "white"
                    ? Variables.Overlays.Plain.White50
                    : $overlay === "gradient-black"
                    ? Variables.Overlays.Gradient.Black
                    : $overlay === "gradient-white"
                    ? Variables.Overlays.Gradient.White
                    : Variables.Overlays.Plain.Black50};
            }
        `}
`
