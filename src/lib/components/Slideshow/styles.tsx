/*=============================================== Slideshow styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    Flexbox,
    Image,
    Mixins,
    Radiuses,
    Spacers,
    Transitions,
} from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledSlideshow = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        $gap: "xs",
        $flexDirection: "column",
        $alignItems: "center",
        $justifyItems: "center",
    })};
    position: relative;
`

const Wrapper = styled(Flexbox)`
    width: 100%;
    height: var(--slideshow-height, 30vw);
    position: relative;
    overflow: hidden;
`

const ContentWrapper = styled(Flexbox)`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const Content = styled(Flexbox)`
    transition: all var(--slideshow-speed, 1000ms) ease;
    width: 100%;
    transform: translateX(var(--translate));
    height: 100%;

    ${Mixins.HideScrollbar}

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        transition: ${Transitions.Long};
    }

    img {
        width: 100%;
        height: 100%;
    }
`

const BUTTON_SIZE = 32
const BUTTON_SIZE_LARGE = 48

const BaseButton = styled.button`
    border-radius: ${Radiuses.Circle};
    padding: 0;
    border: none;
    position: absolute;
    z-index: 2;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}

    &[data-size="small"] {
        width: ${BUTTON_SIZE}px;
        height: ${BUTTON_SIZE}px;
        top: calc(50% - ${BUTTON_SIZE}px / 2);

        &[data-position="left"] {
            left: ${Spacers.XS};
        }

        &[data-position="right"] {
            right: ${Spacers.XS};
        }
    }

    &[data-size="large"] {
        width: ${BUTTON_SIZE_LARGE}px;
        height: ${BUTTON_SIZE_LARGE}px;
        top: calc(50% - ${BUTTON_SIZE_LARGE}px / 2);

        &[data-position="left"] {
            border-radius: 0 ${Radiuses.M} ${Radiuses.M} 0;
            left: 0;
        }

        &[data-position="right"] {
            border-radius: ${Radiuses.M} 0 0 ${Radiuses.M};
            right: 0;
        }
    }

    &.hide-on-touch {
        @media ${Breakpoints.Touch} {
            display: none;
        }
    }
`

const Button = styled(BaseButton)<{ $color?: ColorsHoverTypes }>`
    color: ${({ $color, theme }) =>
        $color === "white" ? theme.Primary500 : theme.Background};
    background-color: ${({ theme, $color }) =>
        theme.ColorsHoverDefault({ $color })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme, $color }) =>
                theme.ColorsHoverHover({ $color })};
        }

        &:active {
            background-color: ${({ theme, $color }) =>
                theme.ColorsHoverActive({ $color })};
        }
    }
`

const Pagination = styled(Flexbox).attrs({
    justifyContent: "center",
    alignItems: "center",
    gap: "xs",
})`
    width: 100%;
    max-width: 70%;

    &.hide-on-touch {
        @media ${Breakpoints.Touch} {
            display: none;
        }
    }

    &[data-position="inside"] {
        position: absolute;
        bottom: 8px;
    }
`

const DOT_SIZE = 8

const DotBase = styled.button`
    padding: 0;
    border: none;
    transition: ${Transitions.Short};

    &[data-variant="dots"] {
        width: ${DOT_SIZE}px;
        height: ${DOT_SIZE}px;
        border-radius: 50%;
    }

    &[data-variant="dots-outline"] {
        width: ${DOT_SIZE}px;
        height: ${DOT_SIZE}px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid;
    }

    &[data-variant="bars"] {
        flex-grow: 1;
        height: 4px;
        border-radius: ${Radiuses.Round};
    }
`

const Dot = styled(DotBase)<{
    $color?: ColorsHoverTypes
}>`
    &[data-variant="dots"] {
        background-color: ${({ $color, theme }) =>
            theme.ColorsHoverHover({ $color })};

        @media ${Breakpoints.Hover} {
            &:hover {
                background-color: ${({ $color, theme }) =>
                    theme.ColorsHoverDefault({ $color })};
            }

            &:active {
                background-color: ${({ $color, theme }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &.active {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverDefault({ $color })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    background-color: ${({ $color, theme }) =>
                        theme.ColorsHoverHover({ $color })};
                }
            }
        }
    }

    &[data-variant="dots-outline"] {
        ${({ theme, $color }) => theme.ColorsHoverDefault({ $color })};

        @media ${Breakpoints.Hover} {
            &:hover {
                border-color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:active {
                border-color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &.active {
            background-color: ${({ theme, $color }) =>
                theme.ColorsHoverDefault({ $color: $color })};

            &:hover {
                border-color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color: $color })};
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color: $color })};
            }

            &:active {
                border-color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color: $color })};
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color: $color })};
            }
        }
    }

    &[data-variant="bars"] {
        background-color: ${({ theme, $color }) =>
            theme.ColorsHoverHover({ $color })};

        @media ${Breakpoints.Hover} {
            &:hover {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverDefault({ $color })};
            }

            &:active {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color: $color })};
            }
        }

        &.active {
            background-color: ${({ theme, $color }) =>
                theme.ColorsHoverDefault({ $color: $color })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    background-color: ${({ theme, $color }) =>
                        theme.ColorsHoverHover({ $color })};
                }
            }
        }
    }
`

const Thumbnail = styled(Image).attrs({ fit: "cover", width: 48, height: 48 })`
    opacity: 0.5;
    transition: ${Transitions.Short};
    cursor: pointer;

    &.active {
        opacity: 1;
    }

    @media ${Breakpoints.Hover} {
        &:hover {
            opacity: 0.8;
        }
    }
`

setDefaultTheme([
    StyledSlideshow,
    Wrapper,
    ContentWrapper,
    Content,
    Button,
    Pagination,
    Dot,
    Thumbnail,
])

export {
    StyledSlideshow,
    Wrapper,
    ContentWrapper,
    Content,
    Button,
    Pagination,
    Dot,
    Thumbnail,
}
