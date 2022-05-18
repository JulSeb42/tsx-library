// Imports
import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import {
    titleProps,
    h1Props,
    paragraphsProps,
    pProps,
    listProps,
    commonProps,
} from "./types"

const Common = (props: commonProps) => css`
    color: ${Mixins.Color};
    text-align: ${props.align};

    a {
        text-decoration: none;
        color: ${props.colorLink === "primary"
            ? Variables.Colors.Primary500
            : props.colorLink === "secondary"
            ? Variables.Colors.Secondary500
            : props.colorLink === "success"
            ? Variables.Colors.Success500
            : props.colorLink === "danger"
            ? Variables.Colors.Danger500
            : props.colorLink === "warning"
            ? Variables.Colors.Warning500
            : props.colorLink === "black"
            ? Variables.Colors.Black
            : props.colorLink === "white"
            ? Variables.Colors.White
            : props.colorLink === "gray"
            ? Variables.Colors.Gray500
            : props.colorLink || Variables.Colors.Primary500};
        font-weight: ${Variables.FontWeights.Black};
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${props.colorLink === "primary" && !props.colorLinkHover
                ? Variables.Colors.Primary300
                : props.colorLink === "secondary" && !props.colorLinkHover
                ? Variables.Colors.Secondary300
                : props.colorLink === "success" && !props.colorLinkHover
                ? Variables.Colors.Success300
                : props.colorLink === "danger" && !props.colorLinkHover
                ? Variables.Colors.Danger300
                : props.colorLink === "warning" && !props.colorLinkHover
                ? Variables.Colors.Warning300
                : props.colorLink === "black" && !props.colorLinkHover
                ? Variables.Colors.Gray700
                : props.colorLink === "white" && !props.colorLinkHover
                ? Variables.Colors.Gray300
                : props.colorLink === "gray" && !props.colorLinkHover
                ? Variables.Colors.Gray300
                : props.colorLinkHover || Variables.Colors.Primary300};
        }

        &:active {
            color: ${props.colorLink === "primary" && !props.colorLinkActive
                ? Variables.Colors.Primary600
                : props.colorLink === "secondary" && !props.colorLinkActive
                ? Variables.Colors.Secondary600
                : props.colorLink === "success" && !props.colorLinkActive
                ? Variables.Colors.Success600
                : props.colorLink === "danger" && !props.colorLinkActive
                ? Variables.Colors.Danger600
                : props.colorLink === "warning" && !props.colorLinkActive
                ? Variables.Colors.Warning600
                : props.colorLink === "black" && !props.colorLinkActive
                ? Variables.Colors.Gray900
                : props.colorLink === "white" && !props.colorLinkActive
                ? Variables.Colors.Gray100
                : props.colorLink === "gray" && !props.colorLinkActive
                ? Variables.Colors.Gray600
                : props.colorLinkActive || Variables.Colors.Primary600};
        }
    }
`

const H1 = styled.h1<h1Props>`
    ${Common};
    font-size: ${({ display }) =>
        display
            ? Variables.FontSizes.Display.H1
            : Variables.FontSizes.Titles.H1};
    font-weight: ${Variables.FontWeights.Black};
    display: ${({ hidden }) => (hidden ? "none" : "")};
`

const H2 = styled.h2<titleProps>`
    ${Common};
    font-size: ${({ display }) =>
        display
            ? Variables.FontSizes.Display.H2
            : Variables.FontSizes.Titles.H2};
    font-weight: ${Variables.FontWeights.Black};
`

const H3 = styled.h3<titleProps>`
    ${Common};
    font-size: ${({ display }) =>
        display
            ? Variables.FontSizes.Display.H3
            : Variables.FontSizes.Titles.H3};
    font-weight: ${Variables.FontWeights.Black};
`

const H4 = styled.h4<titleProps>`
    ${Common};
    font-size: ${({ display }) =>
        display
            ? Variables.FontSizes.Display.H4
            : Variables.FontSizes.Titles.H4};
    font-weight: ${Variables.FontWeights.Black};
`

const H5 = styled.h5<titleProps>`
    ${Common};
    font-size: ${({ display }) =>
        display
            ? Variables.FontSizes.Display.H5
            : Variables.FontSizes.Titles.H5};
    font-weight: ${Variables.FontWeights.Black};
`

const H6 = styled.h6<titleProps>`
    ${Common};
    font-size: ${Variables.FontSizes.Titles.H6};
    font-weight: ${Variables.FontWeights.Black};
`

const P = styled.p<pProps>`
    ${Common};
    font-size: ${Variables.FontSizes.Body};
    white-space: ${({ pre }) => pre && "pre-line"};

    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Spacers.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
        font-family: ${Variables.FontFamilies.Code};
    }
`

const Small = styled.small<paragraphsProps>`
    ${Common};
    font-size: ${Variables.FontSizes.Small};
`

const Strong = styled.strong<paragraphsProps>`
    ${Common};
    font-weight: ${Variables.FontWeights.Black};
`

const Em = styled.em<paragraphsProps>`
    ${Common};
    font-style: italic;
`

const List = styled.ul<listProps>`
    ${Common};
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Spacers.S};
    ${({ gap }) =>
        Mixins.Grid({
            gap: gap ? stringifyPx(gap) : Variables.Spacers.XXS,
        })};

    li {
        padding-inline-start: ${Variables.Spacers.XS};
        line-height: ${Variables.LineHeight};

        &::marker {
            content: url("data:image/svg+xml,%3Csvg width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.942666 7.60933L4.74733 3.80467L0.942666 0L0 0.942666L2.862 3.80467L0 6.66667L0.942666 7.60933Z' fill='currentColor'/%3E%3C/svg%3E%0A");
        }
    }
`

export { H1, H2, H3, H4, H5, H6, P, Small, Strong, Em, List }
