/*=============================================== Cover ===============================================*/

/*==================== Imports ====================*/

import React, { Suspense } from "react"
import styled, { css } from "styled-components"

import Variables from "../Variables"
import Mixins from "../Mixins"
import Fallback from "../Fallback"

const CoverImage = React.lazy(() => import("./CoverImage"))

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    position: relative;
    width: 100%;
    height: ${({ $height }) => $height};

    ${({ $overlay }) =>
        $overlay &&
        css`
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                background-color: ${Variables.Overlays.Plain.Black50};
            }
        `}
`

const Content = styled.div<StyleProps>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    color: ${Variables.Colors.White};
    width: 100%;
    height: 100%;
    ${({ $align }) =>
        Mixins.Flexbox({
            $alignItems: $align === "bottom" ? "flex-start" : "center",
            $justifyContent: $align === "bottom" ? "flex-end" : "center",
            $flexDirection: "column",
            $gap: "s",
        })};
    padding: ${Variables.Spacers.XXL} 5%;
    text-align: ${({ $align }) => $align === "center" && "center"};

    & > * {
        position: relative;
        top: 0;
    }
`

/*==================== Component ====================*/

const Cover = ({ src, alt, children, options, ...props }: Props) => (
    <Container
        $overlay={options?.overlay}
        $align={options?.align || "center"}
        $height={options?.height || "100vh"}
        {...props}
    >
        <Suspense fallback={<Fallback $width="100%" $height={options?.height || "100vh"} />}>
            <CoverImage src={src} alt={alt} />
        </Suspense>

        <Content $align={options?.align || "center"}>{children}</Content>
    </Container>
)

export default Cover

/*==================== Types ====================*/

const align = {
    center: "center",
    bottom: "bottom",
} as const

type AlignTypes = keyof typeof align

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $overlay?: boolean
    $align?: AlignTypes
    $height?: number | string
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string
    alt: string
    children: React.ReactNode | React.ReactNode[]

    options?: {
        overlay?: boolean
        align?: AlignTypes
        height?: number | string
    }
}
