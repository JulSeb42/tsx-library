// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"

import { styleSelectedProps, styleListProps, styleLiProps } from "./types"

const Container = styled.div`
    position: relative;
`

const Selected = styled.span<styleSelectedProps>`
    position: relative;
    z-index: 1;
    border: 1px solid
        ${({ isOpen, noSelect }) =>
            isOpen
                ? Variables.Colors.Primary500
                : noSelect
                ? Variables.Colors.Gray200
                : Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    outline: none;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    height: 35px;
    width: 100%;
    display: block;
    line-height: 100%;
    transition: ${Variables.Transitions.Short};
    user-select: none;

    ${({ arrow, isOpen }) =>
        arrow &&
        css`
            cursor: pointer;

            &:after {
                content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%231B4568'/%3E%3C/svg%3E");
                color: ${Variables.Colors.Primary500};
                position: absolute;
                z-index: 2;
                top: calc(50% - 18px / 2);
                right: ${Variables.Spacers.XS};
                transition: ${Variables.Transitions.Short};
                transform: ${isOpen && "rotate(180deg)"};
            }
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            color: ${Variables.Colors.Gray800};
            border-color: ${Variables.Colors.Gray200};
            background-color: ${Variables.Colors.Gray50};
        `}

    ${({ arrow, disabled }) =>
        arrow &&
        disabled &&
        css`
            &:after {
                content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%232F2F2F'/%3E%3C/svg%3E");
            }
        `}
`

const List = styled.ul<styleListProps>`
    position: absolute;
    top: calc(35px + ${Variables.Spacers.XS});
    left: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: ${Variables.Colors.White};
    box-shadow: ${Variables.Shadows.S};
    width: 100%;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    z-index: 10;
    transition: ${Variables.Transitions.Short};
    max-height: ${({ isOpen }) => (isOpen ? "200px" : 0)};
    overflow-y: scroll;
    z-index: ${({ index }) => index};
`

const SelectItem = styled.li<styleLiProps>`
    cursor: pointer;
    padding: ${Variables.Spacers.XS};
    width: 100%;
    transition: ${Variables.Transitions.Short};
    user-select: none;

    &:hover {
        background-color: ${Variables.Colors.Primary300};
        color: ${Variables.Colors.White};
    }

    ${({ selected }) =>
        selected &&
        css`
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};
        `}
`

export { Container, Selected, List, SelectItem }
