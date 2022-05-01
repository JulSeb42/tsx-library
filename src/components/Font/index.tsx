// Packages
import { HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
interface h1Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
    hidden?: boolean
}

interface h2Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

interface h3Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

interface h4Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

interface h5Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

interface h6Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    color?: string
}

interface pProps extends HTMLAttributes<HTMLParagraphElement> {
    align?: string
    pre?: boolean
    color?: string
}

interface smallProps extends HTMLAttributes<HTMLElement> {
    align?: string
    color?: string
}

interface strongProps extends HTMLAttributes<HTMLElement> {
    align?: string
    color?: string
}

interface emProps extends HTMLAttributes<HTMLElement> {
    align?: string
    color?: string
}

interface listProps extends HTMLAttributes<HTMLUListElement> {
    gap?: string | number
    color?: string
    align?: string
}

// Styles
const H1 = styled.h1<h1Props>`
    font-size: ${Variables.FontSizes.Titles.ExtraLarge};
    font-weight: ${Variables.FontWeights.Black};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-size: ${Variables.FontSizes.Display.H1};
        `}

    ${props =>
        props.hidden &&
        css`
            position: fixed;
            top: -999em;
            left: -999em;
        `}
`

const H2 = styled.h2<h2Props>`
    font-size: ${Variables.FontSizes.Titles.Large};
    font-weight: ${Variables.FontWeights.Black};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-size: ${Variables.FontSizes.Display.H2};
        `}
`

const H3 = styled.h3<h3Props>`
    font-size: ${Variables.FontSizes.Titles.Large};
    font-weight: ${Variables.FontWeights.Bold};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-weight: ${Variables.FontWeights.Black};
            font-size: ${Variables.FontSizes.Display.H3};
        `}
`

const H4 = styled.h4<h4Props>`
    font-size: ${Variables.FontSizes.Titles.Medium};
    font-weight: ${Variables.FontWeights.Black};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-size: ${Variables.FontSizes.Display.H4};
        `}
`

const H5 = styled.h5<h5Props>`
    font-size: ${Variables.FontSizes.Titles.Medium};
    font-weight: ${Variables.FontWeights.Bold};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-weight: ${Variables.FontWeights.Black};
            font-size: ${Variables.FontSizes.Display.H5};
        `}
`

const H6 = styled.h6<h6Props>`
    font-size: ${Variables.FontSizes.Titles.Small};
    font-weight: ${Variables.FontWeights.Black};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

const P = styled.p<pProps>`
    font-size: ${Variables.FontSizes.Body};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};
        font-weight: ${Variables.FontWeights.Bold};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.pre &&
        css`
            white-space: pre-line;
        `}

    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Spacers.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
        font-family: ${Variables.FontFamilies.Code};
    }
`

const Small = styled.small<smallProps>`
    font-size: ${Variables.FontSizes.Small};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};
        font-weight: ${Variables.FontWeights.Bold};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

const Strong = styled.strong<strongProps>`
    font-weight: ${Variables.FontWeights.Bold};
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

const Em = styled.em<emProps>`
    font-style: italic;
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

const List = styled.ul<listProps>`
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Spacers.S};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Spacers.XXS};
    list-style: none;
    color: ${props => props.color || "currentColor"};
    text-align: ${props => props.align || "left"};

    li {
        padding-inline-start: ${Variables.Spacers.XS};
        line-height: calc(${Variables.LineHeight} * ${Variables.FontSizes.Body});

        a {
            color: ${Variables.Colors.Primary500};
            text-decoration: none;
            transition: ${Variables.Transitions.Short};
            font-weight: ${Variables.FontWeights.Bold};

            &:hover {
                color: ${Variables.Colors.Primary300};
            }

            &:active {
                color: ${Variables.Colors.Primary600};
            }
        }

        &::marker {
            content: url("data:image/svg+xml,%3Csvg width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.942666 7.60933L4.74733 3.80467L0.942666 0L0 0.942666L2.862 3.80467L0 6.66667L0.942666 7.60933Z' fill='currentColor'/%3E%3C/svg%3E%0A");
        }
    }
`

export { H1, H2, H3, H4, H5, H6, P, Small, Strong, Em, List }
