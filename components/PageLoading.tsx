/*=============================================== PageLoading ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect } from "react"
import styled from "styled-components"

import Mixins from "./Mixins"
import Loader from "./Loader"

import { LibColorsTypes, ColorsShortTypes } from "./common-types"

/*==================== Component ====================*/

const PageLoading = ({ options, ...props }: Props) => {
    useEffect(() => document.body.classList.add("stop-scrolling"))

    return (
        <StyledPageLoading $backgroundColor={options?.backgroundColor || "primary"} {...props}>
            <Loader
                options={{
                    size: 64,
                    borderSize: 12,
                    color:
                        options?.backgroundColor === "white" && !options?.loaderColor
                            ? "primary"
                            : options?.loaderColor
                            ? options?.loaderColor
                            : "white",
                }}
            />
        </StyledPageLoading>
    )
}

export default PageLoading

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $backgroundColor?: LibColorsTypes | ColorsShortTypes | string
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    options?: {
        backgroundColor?: LibColorsTypes | ColorsShortTypes | string
        loaderColor?: LibColorsTypes | ColorsShortTypes | string
    }
}

/*==================== Styles ====================*/

const StyledPageLoading = styled.div<StyleProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${({ $backgroundColor }) => Mixins.AllColors({ $color: $backgroundColor })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    z-index: 999;
`
